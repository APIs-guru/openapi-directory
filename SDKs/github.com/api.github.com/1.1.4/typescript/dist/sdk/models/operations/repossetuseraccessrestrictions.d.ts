import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposSetUserAccessRestrictionsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposSetUserAccessRestrictionsRequestBody extends SpeakeasyBase {
    users: string[];
}
export declare class ReposSetUserAccessRestrictionsRequest extends SpeakeasyBase {
    pathParams: ReposSetUserAccessRestrictionsPathParams;
    request?: ReposSetUserAccessRestrictionsRequestBody;
}
export declare class ReposSetUserAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
    validationError?: shared.ValidationError;
}
