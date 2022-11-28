import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectorySchemasInsertPathParams extends SpeakeasyBase {
    customerId: string;
}
export declare class DirectorySchemasInsertQueryParams extends SpeakeasyBase {
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
export declare class DirectorySchemasInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectorySchemasInsertRequest extends SpeakeasyBase {
    pathParams: DirectorySchemasInsertPathParams;
    queryParams: DirectorySchemasInsertQueryParams;
    request?: shared.Schema;
    security: DirectorySchemasInsertSecurity;
}
export declare class DirectorySchemasInsertResponse extends SpeakeasyBase {
    contentType: string;
    schema?: shared.Schema;
    statusCode: number;
}
