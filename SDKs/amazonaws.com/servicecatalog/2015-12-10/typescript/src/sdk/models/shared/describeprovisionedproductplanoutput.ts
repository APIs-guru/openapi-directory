import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductPlanDetails } from "./provisionedproductplandetails";
import { ResourceChange } from "./resourcechange";



export class DescribeProvisionedProductPlanOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductPlanDetails" })
  provisionedProductPlanDetails?: ProvisionedProductPlanDetails;

  @SpeakeasyMetadata({ data: "json, name=ResourceChanges", elemType: ResourceChange })
  resourceChanges?: ResourceChange[];
}
