import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstanceStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;
}
