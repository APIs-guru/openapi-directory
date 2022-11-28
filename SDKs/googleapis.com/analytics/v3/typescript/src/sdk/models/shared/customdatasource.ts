import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomDataSourceChildLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// CustomDataSourceParentLink
/** 
 * Parent link for this custom data source. Points to the web property to which this custom data source belongs.
**/
export class CustomDataSourceParentLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// CustomDataSource
/** 
 * JSON template for an Analytics custom data source.
**/
export class CustomDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=childLink" })
  childLink?: CustomDataSourceChildLink;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=importBehavior" })
  importBehavior?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentLink" })
  parentLink?: CustomDataSourceParentLink;

  @SpeakeasyMetadata({ data: "json, name=profilesLinked" })
  profilesLinked?: string[];

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
