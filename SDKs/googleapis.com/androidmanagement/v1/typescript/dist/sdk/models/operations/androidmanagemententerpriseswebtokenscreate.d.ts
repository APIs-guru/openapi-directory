import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidmanagementEnterprisesWebTokensCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AndroidmanagementEnterprisesWebTokensCreateQueryParams extends SpeakeasyBase {
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
export declare class AndroidmanagementEnterprisesWebTokensCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementEnterprisesWebTokensCreateRequest extends SpeakeasyBase {
    pathParams: AndroidmanagementEnterprisesWebTokensCreatePathParams;
    queryParams: AndroidmanagementEnterprisesWebTokensCreateQueryParams;
    request?: shared.WebToken;
    security: AndroidmanagementEnterprisesWebTokensCreateSecurity;
}
export declare class AndroidmanagementEnterprisesWebTokensCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webToken?: shared.WebToken;
}
