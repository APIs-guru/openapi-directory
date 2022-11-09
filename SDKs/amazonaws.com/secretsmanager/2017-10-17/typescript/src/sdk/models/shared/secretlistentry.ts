import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RotationRulesType } from "./rotationrulestype";
import { Tag } from "./tag";


// SecretListEntry
/** 
 * A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use the <a>GetSecretValue</a> operation.
**/
export class SecretListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DeletedDate" })
  deletedDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LastAccessedDate" })
  lastAccessedDate?: Date;

  @Metadata({ data: "json, name=LastChangedDate" })
  lastChangedDate?: Date;

  @Metadata({ data: "json, name=LastRotatedDate" })
  lastRotatedDate?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OwningService" })
  owningService?: string;

  @Metadata({ data: "json, name=PrimaryRegion" })
  primaryRegion?: string;

  @Metadata({ data: "json, name=RotationEnabled" })
  rotationEnabled?: boolean;

  @Metadata({ data: "json, name=RotationLambdaARN" })
  rotationLambdaArn?: string;

  @Metadata({ data: "json, name=RotationRules" })
  rotationRules?: RotationRulesType;

  @Metadata({ data: "json, name=SecretVersionsToStages" })
  secretVersionsToStages?: Map<string, string[]>;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
