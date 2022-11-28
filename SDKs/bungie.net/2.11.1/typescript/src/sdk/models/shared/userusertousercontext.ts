import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IgnoresIgnoreResponse } from "./ignoresignoreresponse";



export class UserUserToUserContext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalIgnoreEndDate?: Date;

  @SpeakeasyMetadata()
  ignoreStatus?: IgnoresIgnoreResponse;

  @SpeakeasyMetadata()
  isFollowing?: boolean;
}
