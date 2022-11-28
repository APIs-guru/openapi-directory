import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponsePlanSummary } from "./responseplansummary";



export class ListResponsePlansOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=responsePlanSummaries", elemType: ResponsePlanSummary })
  responsePlanSummaries: ResponsePlanSummary[];
}
