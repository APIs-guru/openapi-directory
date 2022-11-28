import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Queue } from "./queue";
import { UserActivity } from "./useractivity";



export class UpdateActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queue" })
  queue?: Queue;

  @SpeakeasyMetadata({ data: "json, name=userActivity" })
  userActivity?: UserActivity;
}
