import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateAttributeGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationArn" })
  applicationArn?: string;

  @Metadata({ data: "json, name=attributeGroupArn" })
  attributeGroupArn?: string;
}
