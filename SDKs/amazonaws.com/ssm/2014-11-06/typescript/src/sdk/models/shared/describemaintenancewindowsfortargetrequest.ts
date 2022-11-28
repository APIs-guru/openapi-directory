import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowResourceTypeEnum } from "./maintenancewindowresourcetypeenum";
import { Target } from "./target";



export class DescribeMaintenanceWindowsForTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: MaintenanceWindowResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets: Target[];
}
