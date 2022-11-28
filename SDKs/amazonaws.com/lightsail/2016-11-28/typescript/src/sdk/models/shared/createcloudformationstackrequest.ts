import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceEntry } from "./instanceentry";



export class CreateCloudFormationStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances", elemType: InstanceEntry })
  instances: InstanceEntry[];
}
