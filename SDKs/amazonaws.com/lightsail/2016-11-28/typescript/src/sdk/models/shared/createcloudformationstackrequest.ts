import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceEntry } from "./instanceentry";


export class CreateCloudFormationStackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instances", elemType: shared.InstanceEntry })
  instances: InstanceEntry[];
}
