import { SpeakeasyBase } from "../../../internal/utils";
import { OutputParameter } from "./outputparameter";
/**
 * Metadata for a Lambda step.
**/
export declare class LambdaStepMetadata extends SpeakeasyBase {
    arn?: string;
    outputParameters?: OutputParameter[];
}
