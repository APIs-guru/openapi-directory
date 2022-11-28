import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatusType } from "./replicationstatustype";
import { RotationRulesType } from "./rotationrulestype";
import { Tag } from "./tag";
export declare class DescribeSecretResponse extends SpeakeasyBase {
    arn?: string;
    createdDate?: Date;
    deletedDate?: Date;
    description?: string;
    kmsKeyId?: string;
    lastAccessedDate?: Date;
    lastChangedDate?: Date;
    lastRotatedDate?: Date;
    name?: string;
    owningService?: string;
    primaryRegion?: string;
    replicationStatus?: ReplicationStatusType[];
    rotationEnabled?: boolean;
    rotationLambdaArn?: string;
    rotationRules?: RotationRulesType;
    tags?: Tag[];
    versionIdsToStages?: Map<string, string[]>;
}
