import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopAppReplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;
}
