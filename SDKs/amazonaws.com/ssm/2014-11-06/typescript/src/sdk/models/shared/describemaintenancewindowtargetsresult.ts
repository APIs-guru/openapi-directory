import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowTarget } from "./maintenancewindowtarget";



export class DescribeMaintenanceWindowTargetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: MaintenanceWindowTarget })
  targets?: MaintenanceWindowTarget[];
}
