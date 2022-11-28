import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;
}
