import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
