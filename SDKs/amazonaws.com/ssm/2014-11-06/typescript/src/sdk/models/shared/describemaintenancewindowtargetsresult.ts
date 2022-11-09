import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenanceWindowTarget } from "./maintenancewindowtarget";


export class DescribeMaintenanceWindowTargetsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Targets", elemType: shared.MaintenanceWindowTarget })
  targets?: MaintenanceWindowTarget[];
}
