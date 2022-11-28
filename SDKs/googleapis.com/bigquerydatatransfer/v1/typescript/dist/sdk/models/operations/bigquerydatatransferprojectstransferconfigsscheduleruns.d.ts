import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsTransferConfigsScheduleRunsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams extends SpeakeasyBase {
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
export declare class BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1;
    option2?: BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2;
}
export declare class BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsTransferConfigsScheduleRunsPathParams;
    queryParams: BigquerydatatransferProjectsTransferConfigsScheduleRunsQueryParams;
    request?: shared.ScheduleTransferRunsRequest;
    security: BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity;
}
export declare class BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse extends SpeakeasyBase {
    contentType: string;
    scheduleTransferRunsResponse?: shared.ScheduleTransferRunsResponse;
    statusCode: number;
}
