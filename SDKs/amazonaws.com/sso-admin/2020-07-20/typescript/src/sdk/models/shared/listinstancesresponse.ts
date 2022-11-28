import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetadata } from "./instancemetadata";



export class ListInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Instances", elemType: InstanceMetadata })
  instances?: InstanceMetadata[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
