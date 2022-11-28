import { SpeakeasyBase } from "../../../internal/utils";
import { SearchedArtifact } from "./searchedartifact";
/**
 * Describes the response received when searching for artifacts.
**/
export declare class ArtifactSearchResults extends SpeakeasyBase {
    artifacts: SearchedArtifact[];
    count: number;
}
