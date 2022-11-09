import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationStatusType } from "./replicationstatustype";
import { RotationRulesType } from "./rotationrulestype";
import { Tag } from "./tag";


export class DescribeSecretResponse extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=ReplicationStatus", elemType: shared.ReplicationStatusType })
  replicationStatus?: ReplicationStatusType[];

  @Metadata({ data: "json, name=RotationEnabled" })
  rotationEnabled?: boolean;

  @Metadata({ data: "json, name=RotationLambdaARN" })
  rotationLambdaArn?: string;

  @Metadata({ data: "json, name=RotationRules" })
  rotationRules?: RotationRulesType;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VersionIdsToStages" })
  versionIdsToStages?: Map<string, string[]>;
}
