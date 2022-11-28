import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectorySchemasPatchPathParams extends SpeakeasyBase {
    customerId: string;
    schemaKey: string;
}
export declare class DirectorySchemasPatchQueryParams extends SpeakeasyBase {
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
export declare class DirectorySchemasPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectorySchemasPatchRequest extends SpeakeasyBase {
    pathParams: DirectorySchemasPatchPathParams;
    queryParams: DirectorySchemasPatchQueryParams;
    request?: shared.Schema;
    security: DirectorySchemasPatchSecurity;
}
export declare class DirectorySchemasPatchResponse extends SpeakeasyBase {
    contentType: string;
    schema?: shared.Schema;
    statusCode: number;
}
