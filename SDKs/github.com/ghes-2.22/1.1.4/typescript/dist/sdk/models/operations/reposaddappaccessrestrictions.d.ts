import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposAddAppAccessRestrictionsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposAddAppAccessRestrictionsRequestBody1 extends SpeakeasyBase {
    apps: string[];
}
export declare class ReposAddAppAccessRestrictionsRequest extends SpeakeasyBase {
    pathParams: ReposAddAppAccessRestrictionsPathParams;
    request?: any;
}
export declare class ReposAddAppAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    integrations?: Map<string, any>[];
    validationError?: shared.ValidationError;
}
