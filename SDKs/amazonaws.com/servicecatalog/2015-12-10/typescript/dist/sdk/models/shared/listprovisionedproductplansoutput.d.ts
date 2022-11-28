import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductPlanSummary } from "./provisionedproductplansummary";
export declare class ListProvisionedProductPlansOutput extends SpeakeasyBase {
    nextPageToken?: string;
    provisionedProductPlans?: ProvisionedProductPlanSummary[];
}
