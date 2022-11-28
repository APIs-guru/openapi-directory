import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersMeSubscriptionsRequestBody extends SpeakeasyBase {
    uri: string;
}
export declare class PostUsersMeSubscriptionsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostUsersMeSubscriptionsRequest extends SpeakeasyBase {
    request?: PostUsersMeSubscriptionsRequestBody;
    security: PostUsersMeSubscriptionsSecurity;
}
export declare class PostUsersMeSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
