import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryOrgunitsGetPathParams extends SpeakeasyBase {
    customerId: string;
    orgUnitPath: string;
}
export declare class DirectoryOrgunitsGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryOrgunitsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryOrgunitsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryOrgunitsGetSecurity extends SpeakeasyBase {
    option1?: DirectoryOrgunitsGetSecurityOption1;
    option2?: DirectoryOrgunitsGetSecurityOption2;
}
export declare class DirectoryOrgunitsGetRequest extends SpeakeasyBase {
    pathParams: DirectoryOrgunitsGetPathParams;
    queryParams: DirectoryOrgunitsGetQueryParams;
    security: DirectoryOrgunitsGetSecurity;
}
export declare class DirectoryOrgunitsGetResponse extends SpeakeasyBase {
    contentType: string;
    orgUnit?: shared.OrgUnit;
    statusCode: number;
}
