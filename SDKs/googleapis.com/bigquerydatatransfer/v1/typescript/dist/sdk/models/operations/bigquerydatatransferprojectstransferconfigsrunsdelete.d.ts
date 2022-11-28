import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsTransferConfigsRunsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsDeleteQueryParams extends SpeakeasyBase {
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
export declare class BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption1;
    option2?: BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption2;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsTransferConfigsRunsDeletePathParams;
    queryParams: BigquerydatatransferProjectsTransferConfigsRunsDeleteQueryParams;
    security: BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurity;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
