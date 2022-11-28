import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteServerBlocklistServersHostPathParams extends SpeakeasyBase {
    host: string;
}
export declare class DeleteServerBlocklistServersHostSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteServerBlocklistServersHostRequest extends SpeakeasyBase {
    pathParams: DeleteServerBlocklistServersHostPathParams;
    security: DeleteServerBlocklistServersHostSecurity;
}
export declare class DeleteServerBlocklistServersHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
