import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeGroupSummary } from "./attributegroupsummary";


export class DeleteAttributeGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeGroup" })
  attributeGroup?: AttributeGroupSummary;
}
