import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsCreateFromManifestPathParams extends SpeakeasyBase {
    code: string;
}
export declare class AppsCreateFromManifestRequest extends SpeakeasyBase {
    pathParams: AppsCreateFromManifestPathParams;
    request?: Map<string, any>;
}
export declare class AppsCreateFromManifestResponse extends SpeakeasyBase {
    contentType: string;
    gitHubApp?: Map<string, any>;
    statusCode: number;
    basicError?: shared.BasicError;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
