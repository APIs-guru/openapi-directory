import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SystemInstanceSummary } from "./systeminstancesummary";


export class SearchSystemInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=summaries", elemType: shared.SystemInstanceSummary })
  summaries?: SystemInstanceSummary[];
}
