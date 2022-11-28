import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartOnDemandAppReplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
