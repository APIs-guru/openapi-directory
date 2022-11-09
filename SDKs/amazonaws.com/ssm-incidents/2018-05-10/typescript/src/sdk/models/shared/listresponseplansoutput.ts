import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponsePlanSummary } from "./responseplansummary";


export class ListResponsePlansOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=responsePlanSummaries", elemType: shared.ResponsePlanSummary })
  responsePlanSummaries: ResponsePlanSummary[];
}
