import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArtifactSummary } from "./artifactsummary";


export class ListArtifactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactSummaries", elemType: shared.ArtifactSummary })
  artifactSummaries?: ArtifactSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
