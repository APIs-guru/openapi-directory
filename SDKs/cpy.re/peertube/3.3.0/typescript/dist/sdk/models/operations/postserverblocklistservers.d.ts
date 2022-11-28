import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostServerBlocklistServersRequestBody extends SpeakeasyBase {
    host: string;
}
export declare class PostServerBlocklistServersSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostServerBlocklistServersRequest extends SpeakeasyBase {
    request?: PostServerBlocklistServersRequestBody;
    security: PostServerBlocklistServersSecurity;
}
export declare class PostServerBlocklistServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
