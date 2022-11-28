import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchDashboard } from "./cloudwatchdashboard";
import { ProvisionedProductDetail } from "./provisionedproductdetail";
export declare class DescribeProvisionedProductOutput extends SpeakeasyBase {
    cloudWatchDashboards?: CloudWatchDashboard[];
    provisionedProductDetail?: ProvisionedProductDetail;
}
