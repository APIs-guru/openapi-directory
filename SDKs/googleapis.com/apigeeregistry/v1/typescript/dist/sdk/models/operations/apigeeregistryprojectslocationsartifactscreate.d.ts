import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsArtifactsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeregistryProjectsLocationsArtifactsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    artifactId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeregistryProjectsLocationsArtifactsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsArtifactsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsArtifactsCreatePathParams;
    queryParams: ApigeeregistryProjectsLocationsArtifactsCreateQueryParams;
    request?: shared.Artifact;
    security: ApigeeregistryProjectsLocationsArtifactsCreateSecurity;
}
export declare class ApigeeregistryProjectsLocationsArtifactsCreateResponse extends SpeakeasyBase {
    artifact?: shared.Artifact;
    contentType: string;
    statusCode: number;
}
