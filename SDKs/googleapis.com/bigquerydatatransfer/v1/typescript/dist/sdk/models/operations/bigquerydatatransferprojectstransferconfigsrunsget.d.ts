import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsTransferConfigsRunsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams extends SpeakeasyBase {
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
export declare class BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsGetSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1;
    option2?: BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2;
    option3?: BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsGetRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsTransferConfigsRunsGetPathParams;
    queryParams: BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams;
    security: BigquerydatatransferProjectsTransferConfigsRunsGetSecurity;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transferRun?: shared.TransferRun;
}
