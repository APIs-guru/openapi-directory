import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeGroupSummary } from "./attributegroupsummary";



export class DeleteAttributeGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeGroup" })
  attributeGroup?: AttributeGroupSummary;
}
