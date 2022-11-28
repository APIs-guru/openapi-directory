import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateUserProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserProfileArn" })
  userProfileArn?: string;
}
