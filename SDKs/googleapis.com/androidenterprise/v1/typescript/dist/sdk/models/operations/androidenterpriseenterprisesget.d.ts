import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesGetPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseEnterprisesGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseEnterprisesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEnterprisesGetPathParams;
    queryParams: AndroidenterpriseEnterprisesGetQueryParams;
    security: AndroidenterpriseEnterprisesGetSecurity;
}
export declare class AndroidenterpriseEnterprisesGetResponse extends SpeakeasyBase {
    contentType: string;
    enterprise?: shared.Enterprise;
    statusCode: number;
}
