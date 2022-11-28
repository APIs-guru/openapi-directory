import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherInappproductsPatchPathParams extends SpeakeasyBase {
    packageName: string;
    sku: string;
}
export declare class AndroidpublisherInappproductsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    autoConvertMissingPrices?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherInappproductsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherInappproductsPatchRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherInappproductsPatchPathParams;
    queryParams: AndroidpublisherInappproductsPatchQueryParams;
    request?: shared.InAppProduct;
    security: AndroidpublisherInappproductsPatchSecurity;
}
export declare class AndroidpublisherInappproductsPatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
