import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomConfigSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetCustomConfigRequest extends SpeakeasyBase {
    security: GetCustomConfigSecurity;
}
export declare class GetCustomConfigResponse extends SpeakeasyBase {
    contentType: string;
    serverConfigCustom?: any;
    statusCode: number;
}
