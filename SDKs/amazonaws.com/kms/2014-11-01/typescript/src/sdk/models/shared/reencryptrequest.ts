import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";



export class ReEncryptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CiphertextBlob" })
  ciphertextBlob: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationEncryptionAlgorithm" })
  destinationEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @SpeakeasyMetadata({ data: "json, name=DestinationEncryptionContext" })
  destinationEncryptionContext?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=DestinationKeyId" })
  destinationKeyId: string;

  @SpeakeasyMetadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @SpeakeasyMetadata({ data: "json, name=SourceEncryptionAlgorithm" })
  sourceEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceEncryptionContext" })
  sourceEncryptionContext?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=SourceKeyId" })
  sourceKeyId?: string;
}
