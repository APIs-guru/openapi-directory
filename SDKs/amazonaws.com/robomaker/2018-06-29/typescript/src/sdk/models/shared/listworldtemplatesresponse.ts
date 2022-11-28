import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateSummary } from "./templatesummary";



export class ListWorldTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=templateSummaries", elemType: TemplateSummary })
  templateSummaries?: TemplateSummary[];
}
