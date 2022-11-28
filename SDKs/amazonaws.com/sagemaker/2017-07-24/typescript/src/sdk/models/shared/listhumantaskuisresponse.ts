import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HumanTaskUiSummary } from "./humantaskuisummary";



export class ListHumanTaskUisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiSummaries", elemType: HumanTaskUiSummary })
  humanTaskUiSummaries: HumanTaskUiSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
