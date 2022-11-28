import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Summary } from "./summary";



export class GetComplianceSummaryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SummaryList", elemType: Summary })
  summaryList?: Summary[];
}
