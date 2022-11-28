import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsArchivePathParams extends SpeakeasyBase {
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsArchiveQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsArchiveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsArchiveRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsArchivePathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsArchiveQueryParams;
    request?: Map<string, any>;
    security: AndroidpublisherMonetizationSubscriptionsArchiveSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsArchiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
