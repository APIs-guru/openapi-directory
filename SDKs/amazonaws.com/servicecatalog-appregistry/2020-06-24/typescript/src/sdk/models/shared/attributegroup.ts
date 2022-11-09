import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttributeGroup
/** 
 * Represents a Amazon Web Services Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components.
**/
export class AttributeGroup extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
