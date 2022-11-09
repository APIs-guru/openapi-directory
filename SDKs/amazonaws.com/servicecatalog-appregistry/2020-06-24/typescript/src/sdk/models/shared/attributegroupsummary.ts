import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttributeGroupSummary
/** 
 * Summary of a Amazon Web Services Service Catalog AppRegistry attribute group.
**/
export class AttributeGroupSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
