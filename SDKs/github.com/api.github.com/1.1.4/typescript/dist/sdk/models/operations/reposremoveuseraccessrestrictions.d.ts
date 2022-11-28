import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposRemoveUserAccessRestrictionsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposRemoveUserAccessRestrictionsRequestBody extends SpeakeasyBase {
    users: string[];
}
export declare class ReposRemoveUserAccessRestrictionsRequest extends SpeakeasyBase {
    pathParams: ReposRemoveUserAccessRestrictionsPathParams;
    request?: ReposRemoveUserAccessRestrictionsRequestBody;
}
export declare class ReposRemoveUserAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
    validationError?: shared.ValidationError;
}
