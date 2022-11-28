import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstancesCount } from "./instancescount";



// StackSummary
/** 
 * Summarizes the number of layers, instances, and apps in a stack.
**/
export class StackSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppsCount" })
  appsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=InstancesCount" })
  instancesCount?: InstancesCount;

  @SpeakeasyMetadata({ data: "json, name=LayersCount" })
  layersCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
