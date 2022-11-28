import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseGrouplicensesGetPathParams extends SpeakeasyBase {
    enterpriseId: string;
    groupLicenseId: string;
}
export declare class AndroidenterpriseGrouplicensesGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseGrouplicensesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseGrouplicensesGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseGrouplicensesGetPathParams;
    queryParams: AndroidenterpriseGrouplicensesGetQueryParams;
    security: AndroidenterpriseGrouplicensesGetSecurity;
}
export declare class AndroidenterpriseGrouplicensesGetResponse extends SpeakeasyBase {
    contentType: string;
    groupLicense?: shared.GroupLicense;
    statusCode: number;
}
