import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseProductsGetAppRestrictionsSchemaPathParams extends SpeakeasyBase {
    enterpriseId: string;
    productId: string;
}
export declare class AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseProductsGetAppRestrictionsSchemaRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseProductsGetAppRestrictionsSchemaPathParams;
    queryParams: AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams;
    security: AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity;
}
export declare class AndroidenterpriseProductsGetAppRestrictionsSchemaResponse extends SpeakeasyBase {
    appRestrictionsSchema?: shared.AppRestrictionsSchema;
    contentType: string;
    statusCode: number;
}
