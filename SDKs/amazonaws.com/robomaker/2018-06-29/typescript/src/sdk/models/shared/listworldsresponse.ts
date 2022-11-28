import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorldSummary } from "./worldsummary";



export class ListWorldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=worldSummaries", elemType: WorldSummary })
  worldSummaries?: WorldSummary[];
}
