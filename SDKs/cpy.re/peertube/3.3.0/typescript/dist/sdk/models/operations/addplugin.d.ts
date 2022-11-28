import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddPluginRequestBody1 extends SpeakeasyBase {
    npmName: string;
}
export declare class AddPluginRequestBody2 extends SpeakeasyBase {
    path: string;
}
export declare class AddPluginSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AddPluginRequest extends SpeakeasyBase {
    request?: any;
    security: AddPluginSecurity;
}
export declare class AddPluginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
