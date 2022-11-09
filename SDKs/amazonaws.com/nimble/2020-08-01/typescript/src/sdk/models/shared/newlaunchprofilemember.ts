import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchProfilePersonaEnum } from "./launchprofilepersonaenum";


export class NewLaunchProfileMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=persona" })
  persona: LaunchProfilePersonaEnum;

  @Metadata({ data: "json, name=principalId" })
  principalId: string;
}
