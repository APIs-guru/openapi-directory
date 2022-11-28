import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RebootInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;
}
