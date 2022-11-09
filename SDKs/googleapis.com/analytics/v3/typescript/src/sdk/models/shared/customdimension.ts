import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomDimensionParentLink
/** 
 * Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
**/
export class CustomDimensionParentLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// CustomDimension
/** 
 * JSON template for Analytics Custom Dimension.
**/
export class CustomDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentLink" })
  parentLink?: CustomDimensionParentLink;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
