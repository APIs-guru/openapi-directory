import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePluginRequestBody1 extends SpeakeasyBase {
    npmName: string;
}
export declare class UpdatePluginRequestBody2 extends SpeakeasyBase {
    path: string;
}
export declare class UpdatePluginSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdatePluginRequest extends SpeakeasyBase {
    request?: any;
    security: UpdatePluginSecurity;
}
export declare class UpdatePluginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
