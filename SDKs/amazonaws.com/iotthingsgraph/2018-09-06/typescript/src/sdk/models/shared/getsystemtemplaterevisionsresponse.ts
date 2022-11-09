import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SystemTemplateSummary } from "./systemtemplatesummary";


export class GetSystemTemplateRevisionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=summaries", elemType: shared.SystemTemplateSummary })
  summaries?: SystemTemplateSummary[];
}
