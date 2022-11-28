import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnassignInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
