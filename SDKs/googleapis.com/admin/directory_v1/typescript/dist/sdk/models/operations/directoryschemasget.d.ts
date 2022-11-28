import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectorySchemasGetPathParams extends SpeakeasyBase {
    customerId: string;
    schemaKey: string;
}
export declare class DirectorySchemasGetQueryParams extends SpeakeasyBase {
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
export declare class DirectorySchemasGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectorySchemasGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectorySchemasGetSecurity extends SpeakeasyBase {
    option1?: DirectorySchemasGetSecurityOption1;
    option2?: DirectorySchemasGetSecurityOption2;
}
export declare class DirectorySchemasGetRequest extends SpeakeasyBase {
    pathParams: DirectorySchemasGetPathParams;
    queryParams: DirectorySchemasGetQueryParams;
    security: DirectorySchemasGetSecurity;
}
export declare class DirectorySchemasGetResponse extends SpeakeasyBase {
    contentType: string;
    schema?: shared.Schema;
    statusCode: number;
}
