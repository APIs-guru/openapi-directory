import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Constraints } from "./constraints";
import { UserActivity } from "./useractivity";



export class PlayMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints: Constraints;

  @SpeakeasyMetadata({ data: "json, name=userActivity" })
  userActivity: UserActivity;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
