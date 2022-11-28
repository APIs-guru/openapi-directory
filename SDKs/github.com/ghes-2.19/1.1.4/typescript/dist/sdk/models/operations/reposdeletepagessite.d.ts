import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposDeletePagesSitePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposDeletePagesSite415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposDeletePagesSiteRequest extends SpeakeasyBase {
    pathParams: ReposDeletePagesSitePathParams;
}
export declare class ReposDeletePagesSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    reposDeletePagesSite415ApplicationJsonObject?: ReposDeletePagesSite415ApplicationJson;
    validationError?: shared.ValidationError;
}
