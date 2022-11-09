import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorldSummary } from "./worldsummary";


export class ListWorldsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=worldSummaries", elemType: shared.WorldSummary })
  worldSummaries?: WorldSummary[];
}
