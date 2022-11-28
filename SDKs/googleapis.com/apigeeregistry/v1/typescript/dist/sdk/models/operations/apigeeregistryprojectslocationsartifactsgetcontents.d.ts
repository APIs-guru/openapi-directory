import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsArtifactsGetContentsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeregistryProjectsLocationsArtifactsGetContentsQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsArtifactsGetContentsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsArtifactsGetContentsRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsArtifactsGetContentsPathParams;
    queryParams: ApigeeregistryProjectsLocationsArtifactsGetContentsQueryParams;
    security: ApigeeregistryProjectsLocationsArtifactsGetContentsSecurity;
}
export declare class ApigeeregistryProjectsLocationsArtifactsGetContentsResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
