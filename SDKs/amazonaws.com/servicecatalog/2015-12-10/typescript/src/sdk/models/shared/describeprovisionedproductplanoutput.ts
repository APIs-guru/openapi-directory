import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisionedProductPlanDetails } from "./provisionedproductplandetails";
import { ResourceChange } from "./resourcechange";


export class DescribeProvisionedProductPlanOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=ProvisionedProductPlanDetails" })
  provisionedProductPlanDetails?: ProvisionedProductPlanDetails;

  @Metadata({ data: "json, name=ResourceChanges", elemType: shared.ResourceChange })
  resourceChanges?: ResourceChange[];
}
