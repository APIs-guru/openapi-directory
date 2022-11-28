import { SpeakeasyBase } from "../../../internal/utils";
import { RotationRulesType } from "./rotationrulestype";
import { Tag } from "./tag";
/**
 * A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use the <a>GetSecretValue</a> operation.
**/
export declare class SecretListEntry extends SpeakeasyBase {
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
    rotationEnabled?: boolean;
    rotationLambdaArn?: string;
    rotationRules?: RotationRulesType;
    secretVersionsToStages?: Map<string, string[]>;
    tags?: Tag[];
}
