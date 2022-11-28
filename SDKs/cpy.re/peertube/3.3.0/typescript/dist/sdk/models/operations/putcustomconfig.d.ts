import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCustomConfigSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutCustomConfigRequest extends SpeakeasyBase {
    security: PutCustomConfigSecurity;
}
export declare class PutCustomConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
