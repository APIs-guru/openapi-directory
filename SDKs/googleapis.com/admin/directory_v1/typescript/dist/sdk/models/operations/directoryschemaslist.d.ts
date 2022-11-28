import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectorySchemasListPathParams extends SpeakeasyBase {
    customerId: string;
}
export declare class DirectorySchemasListQueryParams extends SpeakeasyBase {
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
export declare class DirectorySchemasListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectorySchemasListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectorySchemasListSecurity extends SpeakeasyBase {
    option1?: DirectorySchemasListSecurityOption1;
    option2?: DirectorySchemasListSecurityOption2;
}
export declare class DirectorySchemasListRequest extends SpeakeasyBase {
    pathParams: DirectorySchemasListPathParams;
    queryParams: DirectorySchemasListQueryParams;
    security: DirectorySchemasListSecurity;
}
export declare class DirectorySchemasListResponse extends SpeakeasyBase {
    contentType: string;
    schemas?: shared.Schemas;
    statusCode: number;
}
