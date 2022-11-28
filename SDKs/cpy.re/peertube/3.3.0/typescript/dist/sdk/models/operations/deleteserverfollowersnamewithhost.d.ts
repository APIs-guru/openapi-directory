import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteServerFollowersNameWithHostPathParams extends SpeakeasyBase {
    nameWithHost: string;
}
export declare class DeleteServerFollowersNameWithHostSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteServerFollowersNameWithHostRequest extends SpeakeasyBase {
    pathParams: DeleteServerFollowersNameWithHostPathParams;
    security: DeleteServerFollowersNameWithHostSecurity;
}
export declare class DeleteServerFollowersNameWithHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
