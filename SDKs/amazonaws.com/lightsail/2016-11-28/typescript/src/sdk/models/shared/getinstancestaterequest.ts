import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstanceStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;
}
