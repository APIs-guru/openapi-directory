import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsGetBySlugPathParams extends SpeakeasyBase {
    appSlug: string;
}
export declare class AppsGetBySlug415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class AppsGetBySlugRequest extends SpeakeasyBase {
    pathParams: AppsGetBySlugPathParams;
}
export declare class AppsGetBySlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appsGetBySlug415ApplicationJsonObject?: AppsGetBySlug415ApplicationJson;
    basicError?: shared.BasicError;
    integration?: Map<string, any>;
}
