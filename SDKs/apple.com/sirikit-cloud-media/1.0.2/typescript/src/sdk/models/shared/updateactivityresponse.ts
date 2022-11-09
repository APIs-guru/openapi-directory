import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Queue } from "./queue";
import { UserActivity } from "./useractivity";


export class UpdateActivityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=queue" })
  queue?: Queue;

  @Metadata({ data: "json, name=userActivity" })
  userActivity?: UserActivity;
}
