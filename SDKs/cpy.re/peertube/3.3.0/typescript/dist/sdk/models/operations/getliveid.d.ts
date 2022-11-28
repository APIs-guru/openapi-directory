import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLiveIdPathParams extends SpeakeasyBase {
    id: any;
}
export declare class GetLiveIdSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetLiveIdRequest extends SpeakeasyBase {
    pathParams: GetLiveIdPathParams;
    security: GetLiveIdSecurity;
}
export declare class GetLiveIdResponse extends SpeakeasyBase {
    contentType: string;
    liveVideoResponse?: any;
    statusCode: number;
}
