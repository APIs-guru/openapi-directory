import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RebootInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
