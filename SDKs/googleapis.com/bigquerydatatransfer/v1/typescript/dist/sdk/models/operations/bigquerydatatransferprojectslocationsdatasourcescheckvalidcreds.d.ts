import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams extends SpeakeasyBase {
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
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1;
    option2?: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2;
    option3?: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams;
    queryParams: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams;
    request?: Map<string, any>;
    security: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse extends SpeakeasyBase {
    checkValidCredsResponse?: shared.CheckValidCredsResponse;
    contentType: string;
    statusCode: number;
}
