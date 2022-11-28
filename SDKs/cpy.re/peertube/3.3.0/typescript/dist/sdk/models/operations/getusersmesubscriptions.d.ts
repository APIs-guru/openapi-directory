import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeSubscriptionsQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: string;
    start?: number;
}
export declare class GetUsersMeSubscriptionsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersMeSubscriptionsRequest extends SpeakeasyBase {
    queryParams: GetUsersMeSubscriptionsQueryParams;
    security: GetUsersMeSubscriptionsSecurity;
}
export declare class GetUsersMeSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoChannelList?: any;
}
