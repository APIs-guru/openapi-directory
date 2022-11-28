import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartAppReplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;
}
