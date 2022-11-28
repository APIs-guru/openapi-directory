import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsTransferConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dataSourceIds?: string[];
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigquerydatatransferProjectsTransferConfigsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsTransferConfigsListSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsTransferConfigsListSecurityOption1;
    option2?: BigquerydatatransferProjectsTransferConfigsListSecurityOption2;
    option3?: BigquerydatatransferProjectsTransferConfigsListSecurityOption3;
}
export declare class BigquerydatatransferProjectsTransferConfigsListRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsTransferConfigsListPathParams;
    queryParams: BigquerydatatransferProjectsTransferConfigsListQueryParams;
    security: BigquerydatatransferProjectsTransferConfigsListSecurity;
}
export declare class BigquerydatatransferProjectsTransferConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listTransferConfigsResponse?: shared.ListTransferConfigsResponse;
    statusCode: number;
}
