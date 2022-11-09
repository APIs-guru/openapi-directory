import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Summary } from "./summary";


export class GetComplianceSummaryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=SummaryList", elemType: shared.Summary })
  summaryList?: Summary[];
}
