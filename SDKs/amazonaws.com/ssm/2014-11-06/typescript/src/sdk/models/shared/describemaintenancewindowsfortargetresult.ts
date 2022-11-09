import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenanceWindowIdentityForTarget } from "./maintenancewindowidentityfortarget";


export class DescribeMaintenanceWindowsForTargetResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WindowIdentities", elemType: shared.MaintenanceWindowIdentityForTarget })
  windowIdentities?: MaintenanceWindowIdentityForTarget[];
}
