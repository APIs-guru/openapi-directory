import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchFlowExecutionsRequest extends SpeakeasyBase {
    endTime?: Date;
    flowExecutionId?: string;
    maxResults?: number;
    nextToken?: string;
    startTime?: Date;
    systemInstanceId: string;
}
