import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenanceWindowResourceTypeEnum } from "./maintenancewindowresourcetypeenum";
import { Target } from "./target";


export class DescribeMaintenanceWindowsForTargetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: MaintenanceWindowResourceTypeEnum;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets: Target[];
}
