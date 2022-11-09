import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";


export class VerifyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=Message" })
  message: string;

  @Metadata({ data: "json, name=MessageType" })
  messageType?: MessageTypeEnum;

  @Metadata({ data: "json, name=Signature" })
  signature: string;

  @Metadata({ data: "json, name=SigningAlgorithm" })
  signingAlgorithm: SigningAlgorithmSpecEnum;
}
