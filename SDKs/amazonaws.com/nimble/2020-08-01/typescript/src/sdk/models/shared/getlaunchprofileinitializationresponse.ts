import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchProfileInitialization } from "./launchprofileinitialization";


export class GetLaunchProfileInitializationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=launchProfileInitialization" })
  launchProfileInitialization?: LaunchProfileInitialization;
}
