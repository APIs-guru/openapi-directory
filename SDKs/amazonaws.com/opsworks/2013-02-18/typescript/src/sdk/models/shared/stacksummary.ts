import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstancesCount } from "./instancescount";


// StackSummary
/** 
 * Summarizes the number of layers, instances, and apps in a stack.
**/
export class StackSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppsCount" })
  appsCount?: number;

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=InstancesCount" })
  instancesCount?: InstancesCount;

  @Metadata({ data: "json, name=LayersCount" })
  layersCount?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
