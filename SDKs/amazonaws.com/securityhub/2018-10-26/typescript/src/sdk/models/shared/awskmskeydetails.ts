import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsKmsKeyDetails
/** 
 * Contains metadata about an KMS key.
**/
export class AwsKmsKeyDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AWSAccountId" })
  awsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyManager" })
  keyManager?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyRotationStatus" })
  keyRotationStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KeyState" })
  keyState?: string;

  @SpeakeasyMetadata({ data: "json, name=Origin" })
  origin?: string;
}
