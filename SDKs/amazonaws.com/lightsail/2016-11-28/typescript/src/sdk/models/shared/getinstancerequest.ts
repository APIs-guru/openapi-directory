import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;
}
