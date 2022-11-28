import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAbusesRequestBodyAccount extends SpeakeasyBase {
    id?: number;
}
export declare class PostAbusesRequestBodyComment extends SpeakeasyBase {
    id?: number;
}
export declare class PostAbusesRequestBodyVideo extends SpeakeasyBase {
    endAt?: number;
    id?: number;
    startAt?: number;
}
export declare class PostAbusesRequestBody extends SpeakeasyBase {
    account?: PostAbusesRequestBodyAccount;
    comment?: PostAbusesRequestBodyComment;
    predefinedReasons?: shared.PredefinedAbuseReasonsEnum[];
    reason: string;
    video?: PostAbusesRequestBodyVideo;
}
export declare class PostAbusesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostAbuses200ApplicationJsonAbuse extends SpeakeasyBase {
    id?: number;
}
export declare class PostAbuses200ApplicationJson extends SpeakeasyBase {
    abuse?: PostAbuses200ApplicationJsonAbuse;
}
export declare class PostAbusesRequest extends SpeakeasyBase {
    request: PostAbusesRequestBody;
    security: PostAbusesSecurity;
}
export declare class PostAbusesResponse extends SpeakeasyBase {
    contentType: string;
    postAbuses200ApplicationJsonObject?: PostAbuses200ApplicationJson;
    statusCode: number;
}
