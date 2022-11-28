import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAddonSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutAddonRequest extends SpeakeasyBase {
    security: PutAddonSecurity;
}
export declare class PutAddonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
