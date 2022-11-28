import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsTransferConfigsRunsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum {
    RunAttemptUnspecified = "RUN_ATTEMPT_UNSPECIFIED",
    Latest = "LATEST"
}
export declare enum BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    runAttempt?: BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum;
    states?: BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1;
    option2?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2;
    option3?: BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsTransferConfigsRunsListPathParams;
    queryParams: BigquerydatatransferProjectsTransferConfigsRunsListQueryParams;
    security: BigquerydatatransferProjectsTransferConfigsRunsListSecurity;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsListResponse extends SpeakeasyBase {
    contentType: string;
    listTransferRunsResponse?: shared.ListTransferRunsResponse;
    statusCode: number;
}
