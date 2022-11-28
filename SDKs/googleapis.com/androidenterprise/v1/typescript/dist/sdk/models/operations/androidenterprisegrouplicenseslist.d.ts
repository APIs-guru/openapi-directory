import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseGrouplicensesListPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseGrouplicensesListQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseGrouplicensesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseGrouplicensesListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseGrouplicensesListPathParams;
    queryParams: AndroidenterpriseGrouplicensesListQueryParams;
    security: AndroidenterpriseGrouplicensesListSecurity;
}
export declare class AndroidenterpriseGrouplicensesListResponse extends SpeakeasyBase {
    contentType: string;
    groupLicensesListResponse?: shared.GroupLicensesListResponse;
    statusCode: number;
}
