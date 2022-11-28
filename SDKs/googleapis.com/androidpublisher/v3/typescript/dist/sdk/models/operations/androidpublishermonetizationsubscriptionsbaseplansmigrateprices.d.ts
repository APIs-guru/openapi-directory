import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesPathParams extends SpeakeasyBase {
    basePlanId: string;
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesPathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesQueryParams;
    request?: shared.MigrateBasePlanPricesRequest;
    security: AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesResponse extends SpeakeasyBase {
    contentType: string;
    migrateBasePlanPricesResponse?: Map<string, any>;
    statusCode: number;
}
