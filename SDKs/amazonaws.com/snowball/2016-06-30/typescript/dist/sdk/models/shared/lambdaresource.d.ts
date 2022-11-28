import { SpeakeasyBase } from "../../../internal/utils";
import { EventTriggerDefinition } from "./eventtriggerdefinition";
/**
 * Identifies
**/
export declare class LambdaResource extends SpeakeasyBase {
    eventTriggers?: EventTriggerDefinition[];
    lambdaArn?: string;
}
