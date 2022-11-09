import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceActionSummary } from "./serviceactionsummary";


export class ListServiceActionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=ServiceActionSummaries", elemType: shared.ServiceActionSummary })
  serviceActionSummaries?: ServiceActionSummary[];
}
