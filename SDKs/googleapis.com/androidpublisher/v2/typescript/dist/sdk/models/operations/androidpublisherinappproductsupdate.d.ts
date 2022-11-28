import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherInappproductsUpdatePathParams extends SpeakeasyBase {
    packageName: string;
    sku: string;
}
export declare class AndroidpublisherInappproductsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    autoConvertMissingPrices?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherInappproductsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherInappproductsUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherInappproductsUpdatePathParams;
    queryParams: AndroidpublisherInappproductsUpdateQueryParams;
    request?: shared.InAppProduct;
    security: AndroidpublisherInappproductsUpdateSecurity;
}
export declare class AndroidpublisherInappproductsUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
