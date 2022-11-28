import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeGroup } from "./attributegroup";



export class CreateAttributeGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeGroup" })
  attributeGroup?: AttributeGroup;
}
