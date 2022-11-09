import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TemplateSummary } from "./templatesummary";


export class ListWorldTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=templateSummaries", elemType: shared.TemplateSummary })
  templateSummaries?: TemplateSummary[];
}
