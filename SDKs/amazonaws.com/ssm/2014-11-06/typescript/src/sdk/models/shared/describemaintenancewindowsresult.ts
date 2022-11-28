import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowIdentity } from "./maintenancewindowidentity";



export class DescribeMaintenanceWindowsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowIdentities", elemType: MaintenanceWindowIdentity })
  windowIdentities?: MaintenanceWindowIdentity[];
}
