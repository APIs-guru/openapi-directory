import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateUserProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserProfileArn" })
  userProfileArn?: string;
}
