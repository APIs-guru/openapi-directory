import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposGetCodeFrequencyStatsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetCodeFrequencyStatsRequest extends SpeakeasyBase {
    pathParams: ReposGetCodeFrequencyStatsPathParams;
}
export declare class ReposGetCodeFrequencyStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    codeFrequencyStats?: number[][];
}
