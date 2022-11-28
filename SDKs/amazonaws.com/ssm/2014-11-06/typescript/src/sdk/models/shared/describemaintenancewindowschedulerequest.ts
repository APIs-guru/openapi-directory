import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchOrchestratorFilter } from "./patchorchestratorfilter";
import { MaintenanceWindowResourceTypeEnum } from "./maintenancewindowresourcetypeenum";
import { Target } from "./target";



export class DescribeMaintenanceWindowScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: PatchOrchestratorFilter })
  filters?: PatchOrchestratorFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: MaintenanceWindowResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets?: Target[];

  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId?: string;
}
