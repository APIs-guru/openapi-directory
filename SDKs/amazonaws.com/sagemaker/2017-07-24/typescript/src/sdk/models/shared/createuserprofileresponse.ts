import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateUserProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserProfileArn" })
  userProfileArn?: string;
}
