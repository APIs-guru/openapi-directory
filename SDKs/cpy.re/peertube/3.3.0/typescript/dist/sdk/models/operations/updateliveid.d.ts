import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLiveIdPathParams extends SpeakeasyBase {
    id: any;
}
export declare class UpdateLiveIdSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateLiveIdRequest extends SpeakeasyBase {
    pathParams: UpdateLiveIdPathParams;
    request?: any;
    security: UpdateLiveIdSecurity;
}
export declare class UpdateLiveIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
