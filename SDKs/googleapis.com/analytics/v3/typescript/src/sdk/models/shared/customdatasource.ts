import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomDataSourceChildLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// CustomDataSourceParentLink
/** 
 * Parent link for this custom data source. Points to the web property to which this custom data source belongs.
**/
export class CustomDataSourceParentLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// CustomDataSource
/** 
 * JSON template for an Analytics custom data source.
**/
export class CustomDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=childLink" })
  childLink?: CustomDataSourceChildLink;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=importBehavior" })
  importBehavior?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentLink" })
  parentLink?: CustomDataSourceParentLink;

  @Metadata({ data: "json, name=profilesLinked" })
  profilesLinked?: string[];

  @Metadata({ data: "json, name=schema" })
  schema?: string[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
