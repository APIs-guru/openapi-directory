import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersMeHistoryVideosRemoveRequestBody extends SpeakeasyBase {
    beforeDate?: Date;
}
export declare class PostUsersMeHistoryVideosRemoveSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostUsersMeHistoryVideosRemoveRequest extends SpeakeasyBase {
    request?: PostUsersMeHistoryVideosRemoveRequestBody;
    security: PostUsersMeHistoryVideosRemoveSecurity;
}
export declare class PostUsersMeHistoryVideosRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
