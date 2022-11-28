import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsTransferConfigsStartManualRunsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsStartManualRunsQueryParams extends SpeakeasyBase {
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
export declare class BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption1;
    option2?: BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption2;
}
export declare class BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsTransferConfigsStartManualRunsPathParams;
    queryParams: BigquerydatatransferProjectsTransferConfigsStartManualRunsQueryParams;
    request?: shared.StartManualTransferRunsRequest;
    security: BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurity;
}
export declare class BigquerydatatransferProjectsTransferConfigsStartManualRunsResponse extends SpeakeasyBase {
    contentType: string;
    startManualTransferRunsResponse?: shared.StartManualTransferRunsResponse;
    statusCode: number;
}
