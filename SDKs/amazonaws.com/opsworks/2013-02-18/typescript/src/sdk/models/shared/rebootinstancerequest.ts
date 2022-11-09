import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RebootInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
