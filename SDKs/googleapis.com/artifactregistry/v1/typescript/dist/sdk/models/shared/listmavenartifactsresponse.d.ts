import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MavenArtifact } from "./mavenartifact";
/**
 * The response from listing maven artifacts.
**/
export declare class ListMavenArtifactsResponse extends SpeakeasyBase {
    mavenArtifacts?: MavenArtifact[];
    nextPageToken?: string;
}
