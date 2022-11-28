import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DelCustomConfigSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DelCustomConfigRequest extends SpeakeasyBase {
    security: DelCustomConfigSecurity;
}
export declare class DelCustomConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
