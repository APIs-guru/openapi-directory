import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";



export class VerifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=SignatureValid" })
  signatureValid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SigningAlgorithm" })
  signingAlgorithm?: SigningAlgorithmSpecEnum;
}
