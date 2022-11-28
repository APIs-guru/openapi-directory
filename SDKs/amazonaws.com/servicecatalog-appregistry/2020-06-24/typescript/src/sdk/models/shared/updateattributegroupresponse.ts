import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeGroup } from "./attributegroup";



export class UpdateAttributeGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeGroup" })
  attributeGroup?: AttributeGroup;
}
