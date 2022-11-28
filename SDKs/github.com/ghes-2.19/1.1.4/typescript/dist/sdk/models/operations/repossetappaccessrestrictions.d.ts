import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposSetAppAccessRestrictionsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposSetAppAccessRestrictionsRequestBody1 extends SpeakeasyBase {
    apps: string[];
}
export declare class ReposSetAppAccessRestrictionsRequest extends SpeakeasyBase {
    pathParams: ReposSetAppAccessRestrictionsPathParams;
    request?: any;
}
export declare class ReposSetAppAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    integrations?: Map<string, any>[];
    validationError?: shared.ValidationError;
}
