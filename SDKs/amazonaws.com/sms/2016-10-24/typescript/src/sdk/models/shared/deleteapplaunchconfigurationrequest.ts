import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAppLaunchConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;
}
