import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RotationRulesType } from "./rotationrulestype";
import { Tag } from "./tag";



// SecretListEntry
/** 
 * A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use the <a>GetSecretValue</a> operation.
**/
export class SecretListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DeletedDate" })
  deletedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastAccessedDate" })
  lastAccessedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastChangedDate" })
  lastChangedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastRotatedDate" })
  lastRotatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OwningService" })
  owningService?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryRegion" })
  primaryRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=RotationEnabled" })
  rotationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RotationLambdaARN" })
  rotationLambdaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RotationRules" })
  rotationRules?: RotationRulesType;

  @SpeakeasyMetadata({ data: "json, name=SecretVersionsToStages" })
  secretVersionsToStages?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
