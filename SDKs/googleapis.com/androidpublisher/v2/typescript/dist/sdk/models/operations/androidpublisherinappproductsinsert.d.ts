import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherInappproductsInsertPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherInappproductsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    autoConvertMissingPrices?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherInappproductsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherInappproductsInsertRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherInappproductsInsertPathParams;
    queryParams: AndroidpublisherInappproductsInsertQueryParams;
    request?: shared.InAppProduct;
    security: AndroidpublisherInappproductsInsertSecurity;
}
export declare class AndroidpublisherInappproductsInsertResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
