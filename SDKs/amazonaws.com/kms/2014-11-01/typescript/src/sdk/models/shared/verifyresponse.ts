import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";


export class VerifyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=SignatureValid" })
  signatureValid?: boolean;

  @Metadata({ data: "json, name=SigningAlgorithm" })
  signingAlgorithm?: SigningAlgorithmSpecEnum;
}
