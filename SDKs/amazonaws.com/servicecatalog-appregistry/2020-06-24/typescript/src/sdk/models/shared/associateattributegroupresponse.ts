import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateAttributeGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationArn" })
  applicationArn?: string;

  @Metadata({ data: "json, name=attributeGroupArn" })
  attributeGroupArn?: string;
}
