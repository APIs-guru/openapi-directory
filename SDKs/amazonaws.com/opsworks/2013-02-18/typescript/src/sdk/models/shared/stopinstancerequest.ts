import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Force" })
  force?: boolean;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
