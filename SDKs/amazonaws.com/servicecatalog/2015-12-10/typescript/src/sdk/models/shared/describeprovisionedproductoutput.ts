import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchDashboard } from "./cloudwatchdashboard";
import { ProvisionedProductDetail } from "./provisionedproductdetail";


export class DescribeProvisionedProductOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchDashboards", elemType: shared.CloudWatchDashboard })
  cloudWatchDashboards?: CloudWatchDashboard[];

  @Metadata({ data: "json, name=ProvisionedProductDetail" })
  provisionedProductDetail?: ProvisionedProductDetail;
}
