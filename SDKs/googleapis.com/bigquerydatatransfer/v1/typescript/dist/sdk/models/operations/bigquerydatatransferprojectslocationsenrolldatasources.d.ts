import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsLocationsEnrollDataSourcesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigquerydatatransferProjectsLocationsEnrollDataSourcesQueryParams extends SpeakeasyBase {
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
export declare class BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurityOption1;
    option2?: BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurityOption2;
}
export declare class BigquerydatatransferProjectsLocationsEnrollDataSourcesRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsLocationsEnrollDataSourcesPathParams;
    queryParams: BigquerydatatransferProjectsLocationsEnrollDataSourcesQueryParams;
    request?: shared.EnrollDataSourcesRequest;
    security: BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurity;
}
export declare class BigquerydatatransferProjectsLocationsEnrollDataSourcesResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
