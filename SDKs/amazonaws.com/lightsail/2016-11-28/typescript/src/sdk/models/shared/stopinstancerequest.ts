import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;
}
