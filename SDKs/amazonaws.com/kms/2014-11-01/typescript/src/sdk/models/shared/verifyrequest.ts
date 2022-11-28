import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";



export class VerifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=MessageType" })
  messageType?: MessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "json, name=SigningAlgorithm" })
  signingAlgorithm: SigningAlgorithmSpecEnum;
}
