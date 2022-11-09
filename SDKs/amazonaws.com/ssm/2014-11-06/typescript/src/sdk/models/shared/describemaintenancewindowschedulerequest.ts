import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatchOrchestratorFilter } from "./patchorchestratorfilter";
import { MaintenanceWindowResourceTypeEnum } from "./maintenancewindowresourcetypeenum";
import { Target } from "./target";


export class DescribeMaintenanceWindowScheduleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.PatchOrchestratorFilter })
  filters?: PatchOrchestratorFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: MaintenanceWindowResourceTypeEnum;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];

  @Metadata({ data: "json, name=WindowId" })
  windowId?: string;
}
