import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectorySchemasDeletePathParams extends SpeakeasyBase {
    customerId: string;
    schemaKey: string;
}
export declare class DirectorySchemasDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectorySchemasDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectorySchemasDeleteRequest extends SpeakeasyBase {
    pathParams: DirectorySchemasDeletePathParams;
    queryParams: DirectorySchemasDeleteQueryParams;
    security: DirectorySchemasDeleteSecurity;
}
export declare class DirectorySchemasDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
