import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigquerydatatransferProjectsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigquerydatatransferProjectsLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsLocationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsLocationsListSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsLocationsListSecurityOption1;
    option2?: BigquerydatatransferProjectsLocationsListSecurityOption2;
    option3?: BigquerydatatransferProjectsLocationsListSecurityOption3;
}
export declare class BigquerydatatransferProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsLocationsListPathParams;
    queryParams: BigquerydatatransferProjectsLocationsListQueryParams;
    security: BigquerydatatransferProjectsLocationsListSecurity;
}
export declare class BigquerydatatransferProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
