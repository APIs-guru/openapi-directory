import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectorySchemasUpdatePathParams extends SpeakeasyBase {
    customerId: string;
    schemaKey: string;
}
export declare class DirectorySchemasUpdateQueryParams extends SpeakeasyBase {
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
export declare class DirectorySchemasUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectorySchemasUpdateRequest extends SpeakeasyBase {
    pathParams: DirectorySchemasUpdatePathParams;
    queryParams: DirectorySchemasUpdateQueryParams;
    request?: shared.Schema;
    security: DirectorySchemasUpdateSecurity;
}
export declare class DirectorySchemasUpdateResponse extends SpeakeasyBase {
    contentType: string;
    schema?: shared.Schema;
    statusCode: number;
}
