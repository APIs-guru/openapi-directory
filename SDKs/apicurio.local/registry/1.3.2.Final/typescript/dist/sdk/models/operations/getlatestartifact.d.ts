import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetLatestArtifactPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare class GetLatestArtifactRequest extends SpeakeasyBase {
    pathParams: GetLatestArtifactPathParams;
}
export declare class GetLatestArtifactResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
