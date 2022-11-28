import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchDashboard } from "./cloudwatchdashboard";
import { ProvisionedProductDetail } from "./provisionedproductdetail";



export class DescribeProvisionedProductOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchDashboards", elemType: CloudWatchDashboard })
  cloudWatchDashboards?: CloudWatchDashboard[];

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductDetail" })
  provisionedProductDetail?: ProvisionedProductDetail;
}
