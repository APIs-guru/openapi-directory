import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsArtifactsReplaceArtifactPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeregistryProjectsLocationsArtifactsReplaceArtifactQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsArtifactsReplaceArtifactSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsArtifactsReplaceArtifactPathParams;
    queryParams: ApigeeregistryProjectsLocationsArtifactsReplaceArtifactQueryParams;
    request?: shared.Artifact;
    security: ApigeeregistryProjectsLocationsArtifactsReplaceArtifactSecurity;
}
export declare class ApigeeregistryProjectsLocationsArtifactsReplaceArtifactResponse extends SpeakeasyBase {
    artifact?: shared.Artifact;
    contentType: string;
    statusCode: number;
}
