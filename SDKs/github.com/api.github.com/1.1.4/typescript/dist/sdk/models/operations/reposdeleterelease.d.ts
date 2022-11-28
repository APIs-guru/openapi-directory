import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposDeleteReleasePathParams extends SpeakeasyBase {
    owner: string;
    releaseId: number;
    repo: string;
}
export declare class ReposDeleteReleaseRequest extends SpeakeasyBase {
    pathParams: ReposDeleteReleasePathParams;
}
export declare class ReposDeleteReleaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
