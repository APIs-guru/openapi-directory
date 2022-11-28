import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductPlanSummary } from "./provisionedproductplansummary";



export class ListProvisionedProductPlansOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductPlans", elemType: ProvisionedProductPlanSummary })
  provisionedProductPlans?: ProvisionedProductPlanSummary[];
}
