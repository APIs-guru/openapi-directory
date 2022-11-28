import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=forceStopAppReplication" })
  forceStopAppReplication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forceTerminateApp" })
  forceTerminateApp?: boolean;
}
