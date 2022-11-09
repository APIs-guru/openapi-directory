import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteKnownHostKeysRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;
}
