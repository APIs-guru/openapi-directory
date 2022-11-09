import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeGroup } from "./attributegroup";


export class CreateAttributeGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeGroup" })
  attributeGroup?: AttributeGroup;
}
