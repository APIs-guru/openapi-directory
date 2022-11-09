import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsKmsKeyDetails
/** 
 * Contains metadata about an KMS key.
**/
export class AwsKmsKeyDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AWSAccountId" })
  awsAccountId?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=KeyManager" })
  keyManager?: string;

  @Metadata({ data: "json, name=KeyRotationStatus" })
  keyRotationStatus?: boolean;

  @Metadata({ data: "json, name=KeyState" })
  keyState?: string;

  @Metadata({ data: "json, name=Origin" })
  origin?: string;
}
