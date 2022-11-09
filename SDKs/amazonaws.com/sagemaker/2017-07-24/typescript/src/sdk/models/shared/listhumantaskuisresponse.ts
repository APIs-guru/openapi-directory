import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HumanTaskUiSummary } from "./humantaskuisummary";


export class ListHumanTaskUisResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanTaskUiSummaries", elemType: shared.HumanTaskUiSummary })
  humanTaskUiSummaries: HumanTaskUiSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
