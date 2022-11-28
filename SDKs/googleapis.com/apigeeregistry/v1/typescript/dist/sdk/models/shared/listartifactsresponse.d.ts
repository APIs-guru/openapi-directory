import { SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
/**
 * Response message for ListArtifacts.
**/
export declare class ListArtifactsResponse extends SpeakeasyBase {
    artifacts?: Artifact[];
    nextPageToken?: string;
}
