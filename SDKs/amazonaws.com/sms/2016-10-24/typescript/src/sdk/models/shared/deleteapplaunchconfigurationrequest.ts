import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAppLaunchConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;
}
