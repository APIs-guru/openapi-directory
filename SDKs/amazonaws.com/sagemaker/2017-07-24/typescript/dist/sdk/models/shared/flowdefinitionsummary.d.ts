import { SpeakeasyBase } from "../../../internal/utils";
import { FlowDefinitionStatusEnum } from "./flowdefinitionstatusenum";
/**
 * Contains summary information about the flow definition.
**/
export declare class FlowDefinitionSummary extends SpeakeasyBase {
    creationTime: Date;
    failureReason?: string;
    flowDefinitionArn: string;
    flowDefinitionName: string;
    flowDefinitionStatus: FlowDefinitionStatusEnum;
}
