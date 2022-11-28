import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposRemoveAppAccessRestrictionsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposRemoveAppAccessRestrictionsRequestBody extends SpeakeasyBase {
    apps: string[];
}
export declare class ReposRemoveAppAccessRestrictionsRequest extends SpeakeasyBase {
    pathParams: ReposRemoveAppAccessRestrictionsPathParams;
    request?: ReposRemoveAppAccessRestrictionsRequestBody;
}
export declare class ReposRemoveAppAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    integrations?: Map<string, any>[];
    validationError?: shared.ValidationError;
}
