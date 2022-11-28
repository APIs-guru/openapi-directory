import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatusType } from "./replicationstatustype";
import { RotationRulesType } from "./rotationrulestype";
import { Tag } from "./tag";



export class DescribeSecretResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=ReplicationStatus", elemType: ReplicationStatusType })
  replicationStatus?: ReplicationStatusType[];

  @SpeakeasyMetadata({ data: "json, name=RotationEnabled" })
  rotationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RotationLambdaARN" })
  rotationLambdaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RotationRules" })
  rotationRules?: RotationRulesType;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VersionIdsToStages" })
  versionIdsToStages?: Map<string, string[]>;
}
