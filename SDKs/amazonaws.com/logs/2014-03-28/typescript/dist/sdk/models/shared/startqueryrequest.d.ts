import { SpeakeasyBase } from "../../../internal/utils";
export declare class StartQueryRequest extends SpeakeasyBase {
    endTime: number;
    limit?: number;
    logGroupName?: string;
    logGroupNames?: string[];
    queryString: string;
    startTime: number;
}
