import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemTemplateSummary } from "./systemtemplatesummary";



export class SearchSystemTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=summaries", elemType: SystemTemplateSummary })
  summaries?: SystemTemplateSummary[];
}
