import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsTransferConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    authorizationCode?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serviceAccountName?: string;
    uploadType?: string;
    uploadProtocol?: string;
    versionInfo?: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsCreateRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsTransferConfigsCreatePathParams;
    queryParams: BigquerydatatransferProjectsTransferConfigsCreateQueryParams;
    request?: shared.TransferConfigInput;
    security: BigquerydatatransferProjectsTransferConfigsCreateSecurity;
}
export declare class BigquerydatatransferProjectsTransferConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transferConfig?: shared.TransferConfig;
}
