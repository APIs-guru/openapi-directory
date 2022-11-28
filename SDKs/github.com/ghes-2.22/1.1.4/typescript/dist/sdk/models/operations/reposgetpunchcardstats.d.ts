import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposGetPunchCardStatsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetPunchCardStatsRequest extends SpeakeasyBase {
    pathParams: ReposGetPunchCardStatsPathParams;
}
export declare class ReposGetPunchCardStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    codeFrequencyStats?: number[][];
}
