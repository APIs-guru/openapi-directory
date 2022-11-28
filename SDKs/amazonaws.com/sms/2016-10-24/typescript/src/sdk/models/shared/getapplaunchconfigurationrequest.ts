import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppLaunchConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;
}
