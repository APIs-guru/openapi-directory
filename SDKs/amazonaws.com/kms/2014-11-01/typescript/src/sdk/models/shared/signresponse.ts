import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";


export class SignResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=Signature" })
  signature?: string;

  @Metadata({ data: "json, name=SigningAlgorithm" })
  signingAlgorithm?: SigningAlgorithmSpecEnum;
}
