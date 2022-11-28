import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAccessPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicyArn" })
  accessPolicyArn: string;

  @SpeakeasyMetadata({ data: "json, name=accessPolicyId" })
  accessPolicyId: string;
}
