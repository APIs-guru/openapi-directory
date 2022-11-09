import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenanceWindowFilter } from "./maintenancewindowfilter";


export class DescribeMaintenanceWindowTargetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.MaintenanceWindowFilter })
  filters?: MaintenanceWindowFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WindowId" })
  windowId: string;
}
