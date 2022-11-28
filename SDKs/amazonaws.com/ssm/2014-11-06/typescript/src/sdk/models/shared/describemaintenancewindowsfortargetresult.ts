import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowIdentityForTarget } from "./maintenancewindowidentityfortarget";



export class DescribeMaintenanceWindowsForTargetResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowIdentities", elemType: MaintenanceWindowIdentityForTarget })
  windowIdentities?: MaintenanceWindowIdentityForTarget[];
}
