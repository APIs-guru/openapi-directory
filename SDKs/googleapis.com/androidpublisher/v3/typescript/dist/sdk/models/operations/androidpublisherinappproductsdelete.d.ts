import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherInappproductsDeletePathParams extends SpeakeasyBase {
    packageName: string;
    sku: string;
}
export declare class AndroidpublisherInappproductsDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherInappproductsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherInappproductsDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherInappproductsDeletePathParams;
    queryParams: AndroidpublisherInappproductsDeleteQueryParams;
    security: AndroidpublisherInappproductsDeleteSecurity;
}
export declare class AndroidpublisherInappproductsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
