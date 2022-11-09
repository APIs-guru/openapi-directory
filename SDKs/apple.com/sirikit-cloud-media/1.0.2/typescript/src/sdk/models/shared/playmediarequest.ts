import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Constraints } from "./constraints";
import { UserActivity } from "./useractivity";


export class PlayMediaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=constraints" })
  constraints: Constraints;

  @Metadata({ data: "json, name=userActivity" })
  userActivity: UserActivity;

  @Metadata({ data: "json, name=version" })
  version: string;
}
