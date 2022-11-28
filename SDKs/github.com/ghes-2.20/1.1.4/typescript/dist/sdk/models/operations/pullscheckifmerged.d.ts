import { SpeakeasyBase } from "../../../internal/utils";
export declare class PullsCheckIfMergedPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsCheckIfMergedRequest extends SpeakeasyBase {
    pathParams: PullsCheckIfMergedPathParams;
}
export declare class PullsCheckIfMergedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
