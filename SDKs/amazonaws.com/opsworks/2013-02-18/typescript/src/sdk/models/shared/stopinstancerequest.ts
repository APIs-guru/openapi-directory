import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
