import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateAttributeGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationArn" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=attributeGroupArn" })
  attributeGroupArn?: string;
}
