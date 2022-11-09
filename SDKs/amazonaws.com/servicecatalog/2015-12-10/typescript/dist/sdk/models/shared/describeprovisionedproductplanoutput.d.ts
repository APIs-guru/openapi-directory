import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedProductPlanDetails } from "./provisionedproductplandetails";
import { ResourceChange } from "./resourcechange";
export declare class DescribeProvisionedProductPlanOutput extends SpeakeasyBase {
    nextPageToken?: string;
    provisionedProductPlanDetails?: ProvisionedProductPlanDetails;
    resourceChanges?: ResourceChange[];
}
