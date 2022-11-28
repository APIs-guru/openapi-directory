import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryOrgunitsUpdatePathParams extends SpeakeasyBase {
    customerId: string;
    orgUnitPath: string;
}
export declare class DirectoryOrgunitsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DirectoryOrgunitsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryOrgunitsUpdateRequest extends SpeakeasyBase {
    pathParams: DirectoryOrgunitsUpdatePathParams;
    queryParams: DirectoryOrgunitsUpdateQueryParams;
    request?: shared.OrgUnit;
    security: DirectoryOrgunitsUpdateSecurity;
}
export declare class DirectoryOrgunitsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    orgUnit?: shared.OrgUnit;
    statusCode: number;
}
