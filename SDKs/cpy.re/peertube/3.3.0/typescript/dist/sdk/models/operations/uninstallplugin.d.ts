import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UninstallPluginRequestBody extends SpeakeasyBase {
    npmName: string;
}
export declare class UninstallPluginSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UninstallPluginRequest extends SpeakeasyBase {
    request?: UninstallPluginRequestBody;
    security: UninstallPluginSecurity;
}
export declare class UninstallPluginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
