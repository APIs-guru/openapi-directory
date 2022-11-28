import { SpeakeasyBase } from "../../../internal/utils";
import { RotationRulesType } from "./rotationrulestype";
export declare class RotateSecretRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    rotationLambdaArn?: string;
    rotationRules?: RotationRulesType;
    secretId: string;
}
