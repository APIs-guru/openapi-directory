import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsTransferConfigsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsPatchQueryParams extends SpeakeasyBase {
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
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
    versionInfo?: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsPatchRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsTransferConfigsPatchPathParams;
    queryParams: BigquerydatatransferProjectsTransferConfigsPatchQueryParams;
    request?: shared.TransferConfigInput;
    security: BigquerydatatransferProjectsTransferConfigsPatchSecurity;
}
export declare class BigquerydatatransferProjectsTransferConfigsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transferConfig?: shared.TransferConfig;
}
