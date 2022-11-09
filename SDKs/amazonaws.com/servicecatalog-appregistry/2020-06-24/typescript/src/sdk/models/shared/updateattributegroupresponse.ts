import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeGroup } from "./attributegroup";


export class UpdateAttributeGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeGroup" })
  attributeGroup?: AttributeGroup;
}
