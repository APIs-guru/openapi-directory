import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAppLaunchConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;
}
