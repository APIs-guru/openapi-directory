import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";



export class SignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=SigningAlgorithm" })
  signingAlgorithm?: SigningAlgorithmSpecEnum;
}
