import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetExecutionHistoryInput extends SpeakeasyBase {
    executionArn: string;
    includeExecutionData?: boolean;
    maxResults?: number;
    nextToken?: string;
    reverseOrder?: boolean;
}
