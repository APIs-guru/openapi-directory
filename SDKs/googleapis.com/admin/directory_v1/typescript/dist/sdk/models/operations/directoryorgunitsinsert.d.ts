import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryOrgunitsInsertPathParams extends SpeakeasyBase {
    customerId: string;
}
export declare class DirectoryOrgunitsInsertQueryParams extends SpeakeasyBase {
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
export declare class DirectoryOrgunitsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryOrgunitsInsertRequest extends SpeakeasyBase {
    pathParams: DirectoryOrgunitsInsertPathParams;
    queryParams: DirectoryOrgunitsInsertQueryParams;
    request?: shared.OrgUnit;
    security: DirectoryOrgunitsInsertSecurity;
}
export declare class DirectoryOrgunitsInsertResponse extends SpeakeasyBase {
    contentType: string;
    orgUnit?: shared.OrgUnit;
    statusCode: number;
}
