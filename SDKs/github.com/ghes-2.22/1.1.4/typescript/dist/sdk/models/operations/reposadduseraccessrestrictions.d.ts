import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposAddUserAccessRestrictionsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposAddUserAccessRestrictionsRequestBody1 extends SpeakeasyBase {
    users: string[];
}
export declare class ReposAddUserAccessRestrictionsRequest extends SpeakeasyBase {
    pathParams: ReposAddUserAccessRestrictionsPathParams;
    request?: any;
}
export declare class ReposAddUserAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
    validationError?: shared.ValidationError;
}
