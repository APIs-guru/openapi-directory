import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum {
    MessageSeverityUnspecified = "MESSAGE_SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    messageTypes?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum[];
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1;
    option2?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2;
    option3?: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams;
    queryParams: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams;
    security: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity;
}
export declare class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse extends SpeakeasyBase {
    contentType: string;
    listTransferLogsResponse?: shared.ListTransferLogsResponse;
    statusCode: number;
}
