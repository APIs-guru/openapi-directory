import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteServerFollowingHostOrHandlePathParams extends SpeakeasyBase {
    hostOrHandle: string;
}
export declare class DeleteServerFollowingHostOrHandleSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteServerFollowingHostOrHandleRequest extends SpeakeasyBase {
    pathParams: DeleteServerFollowingHostOrHandlePathParams;
    security: DeleteServerFollowingHostOrHandleSecurity;
}
export declare class DeleteServerFollowingHostOrHandleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
