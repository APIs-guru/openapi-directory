import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposDeleteAccessRestrictionsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposDeleteAccessRestrictionsRequest extends SpeakeasyBase {
    pathParams: ReposDeleteAccessRestrictionsPathParams;
}
export declare class ReposDeleteAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
