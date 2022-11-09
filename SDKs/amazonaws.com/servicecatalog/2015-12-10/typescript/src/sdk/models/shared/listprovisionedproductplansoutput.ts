import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisionedProductPlanSummary } from "./provisionedproductplansummary";


export class ListProvisionedProductPlansOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=ProvisionedProductPlans", elemType: shared.ProvisionedProductPlanSummary })
  provisionedProductPlans?: ProvisionedProductPlanSummary[];
}
