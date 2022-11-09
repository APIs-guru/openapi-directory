import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAppRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=forceStopAppReplication" })
  forceStopAppReplication?: boolean;

  @Metadata({ data: "json, name=forceTerminateApp" })
  forceTerminateApp?: boolean;
}
