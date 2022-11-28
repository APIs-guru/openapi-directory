import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionSummary } from "./serviceactionsummary";



export class ListServiceActionsForProvisioningArtifactOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceActionSummaries", elemType: ServiceActionSummary })
  serviceActionSummaries?: ServiceActionSummary[];
}
