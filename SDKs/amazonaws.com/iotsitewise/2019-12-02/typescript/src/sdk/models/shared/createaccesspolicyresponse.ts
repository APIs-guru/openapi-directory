import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAccessPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicyArn" })
  accessPolicyArn: string;

  @Metadata({ data: "json, name=accessPolicyId" })
  accessPolicyId: string;
}
