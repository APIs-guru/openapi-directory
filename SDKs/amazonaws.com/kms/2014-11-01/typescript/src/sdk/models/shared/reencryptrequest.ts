import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";


export class ReEncryptRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CiphertextBlob" })
  ciphertextBlob: string;

  @Metadata({ data: "json, name=DestinationEncryptionAlgorithm" })
  destinationEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @Metadata({ data: "json, name=DestinationEncryptionContext" })
  destinationEncryptionContext?: Map<string, string>;

  @Metadata({ data: "json, name=DestinationKeyId" })
  destinationKeyId: string;

  @Metadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @Metadata({ data: "json, name=SourceEncryptionAlgorithm" })
  sourceEncryptionAlgorithm?: EncryptionAlgorithmSpecEnum;

  @Metadata({ data: "json, name=SourceEncryptionContext" })
  sourceEncryptionContext?: Map<string, string>;

  @Metadata({ data: "json, name=SourceKeyId" })
  sourceKeyId?: string;
}
