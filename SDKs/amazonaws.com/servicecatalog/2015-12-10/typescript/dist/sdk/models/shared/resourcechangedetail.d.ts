import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationTypeEnum } from "./evaluationtypeenum";
import { ResourceTargetDefinition } from "./resourcetargetdefinition";
/**
 * Information about a change to a resource attribute.
**/
export declare class ResourceChangeDetail extends SpeakeasyBase {
    causingEntity?: string;
    evaluation?: EvaluationTypeEnum;
    target?: ResourceTargetDefinition;
}
