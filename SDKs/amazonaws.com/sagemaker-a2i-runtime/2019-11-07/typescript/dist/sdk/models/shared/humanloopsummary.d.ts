import { SpeakeasyBase } from "../../../internal/utils/utils";
import { HumanLoopStatusEnum } from "./humanloopstatusenum";
/**
 * Summary information about the human loop.
**/
export declare class HumanLoopSummary extends SpeakeasyBase {
    creationTime?: Date;
    failureReason?: string;
    flowDefinitionArn?: string;
    humanLoopName?: string;
    humanLoopStatus?: HumanLoopStatusEnum;
}
