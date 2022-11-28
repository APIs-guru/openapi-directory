import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherInappproductsGetPathParams extends SpeakeasyBase {
    packageName: string;
    sku: string;
}
export declare class AndroidpublisherInappproductsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherInappproductsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherInappproductsGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherInappproductsGetPathParams;
    queryParams: AndroidpublisherInappproductsGetQueryParams;
    security: AndroidpublisherInappproductsGetSecurity;
}
export declare class AndroidpublisherInappproductsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
