import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutVideosIdRatePathParams extends SpeakeasyBase {
    id: any;
}
export declare enum PutVideosIdRateRequestBodyRatingEnum {
    Like = "like",
    Dislike = "dislike"
}
export declare class PutVideosIdRateRequestBody extends SpeakeasyBase {
    rating: PutVideosIdRateRequestBodyRatingEnum;
}
export declare class PutVideosIdRateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutVideosIdRateRequest extends SpeakeasyBase {
    pathParams: PutVideosIdRatePathParams;
    request?: PutVideosIdRateRequestBody;
    security: PutVideosIdRateSecurity;
}
export declare class PutVideosIdRateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
