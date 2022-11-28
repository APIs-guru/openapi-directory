import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileInitialization } from "./launchprofileinitialization";



export class GetLaunchProfileInitializationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launchProfileInitialization" })
  launchProfileInitialization?: LaunchProfileInitialization;
}
