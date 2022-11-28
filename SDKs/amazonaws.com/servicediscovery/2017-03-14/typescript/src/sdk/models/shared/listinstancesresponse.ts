import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceSummary } from "./instancesummary";



export class ListInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Instances", elemType: InstanceSummary })
  instances?: InstanceSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
