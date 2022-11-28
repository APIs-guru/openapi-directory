import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowFilter } from "./maintenancewindowfilter";



export class DescribeMaintenanceWindowExecutionTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: MaintenanceWindowFilter })
  filters?: MaintenanceWindowFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId: string;
}
