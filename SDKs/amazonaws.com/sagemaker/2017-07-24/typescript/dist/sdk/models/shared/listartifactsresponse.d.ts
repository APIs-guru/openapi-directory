import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactSummary } from "./artifactsummary";
export declare class ListArtifactsResponse extends SpeakeasyBase {
    artifactSummaries?: ArtifactSummary[];
    nextToken?: string;
}
