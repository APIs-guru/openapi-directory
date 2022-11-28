import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationConvertRegionPricesPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherMonetizationConvertRegionPricesQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationConvertRegionPricesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationConvertRegionPricesRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationConvertRegionPricesPathParams;
    queryParams: AndroidpublisherMonetizationConvertRegionPricesQueryParams;
    request?: shared.ConvertRegionPricesRequest;
    security: AndroidpublisherMonetizationConvertRegionPricesSecurity;
}
export declare class AndroidpublisherMonetizationConvertRegionPricesResponse extends SpeakeasyBase {
    contentType: string;
    convertRegionPricesResponse?: shared.ConvertRegionPricesResponse;
    statusCode: number;
}
