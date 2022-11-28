import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    domain: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseEnterprisesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesListRequest extends SpeakeasyBase {
    queryParams: AndroidenterpriseEnterprisesListQueryParams;
    security: AndroidenterpriseEnterprisesListSecurity;
}
export declare class AndroidenterpriseEnterprisesListResponse extends SpeakeasyBase {
    contentType: string;
    enterprisesListResponse?: shared.EnterprisesListResponse;
    statusCode: number;
}
