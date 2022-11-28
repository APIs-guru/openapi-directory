import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactSummary } from "./artifactsummary";



export class ListArtifactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactSummaries", elemType: ArtifactSummary })
  artifactSummaries?: ArtifactSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
