import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryOrgunitsPatchPathParams extends SpeakeasyBase {
    customerId: string;
    orgUnitPath: string;
}
export declare class DirectoryOrgunitsPatchQueryParams extends SpeakeasyBase {
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
export declare class DirectoryOrgunitsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryOrgunitsPatchRequest extends SpeakeasyBase {
    pathParams: DirectoryOrgunitsPatchPathParams;
    queryParams: DirectoryOrgunitsPatchQueryParams;
    request?: shared.OrgUnit;
    security: DirectoryOrgunitsPatchSecurity;
}
export declare class DirectoryOrgunitsPatchResponse extends SpeakeasyBase {
    contentType: string;
    orgUnit?: shared.OrgUnit;
    statusCode: number;
}
