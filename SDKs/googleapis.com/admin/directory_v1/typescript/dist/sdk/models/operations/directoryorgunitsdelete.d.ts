import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryOrgunitsDeletePathParams extends SpeakeasyBase {
    customerId: string;
    orgUnitPath: string;
}
export declare class DirectoryOrgunitsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryOrgunitsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryOrgunitsDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryOrgunitsDeletePathParams;
    queryParams: DirectoryOrgunitsDeleteQueryParams;
    security: DirectoryOrgunitsDeleteSecurity;
}
export declare class DirectoryOrgunitsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
