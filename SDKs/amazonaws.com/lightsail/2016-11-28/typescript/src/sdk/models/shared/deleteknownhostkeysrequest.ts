import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteKnownHostKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;
}
