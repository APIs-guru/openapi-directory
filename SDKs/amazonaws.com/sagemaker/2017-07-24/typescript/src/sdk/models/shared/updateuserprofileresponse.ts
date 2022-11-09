import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateUserProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserProfileArn" })
  userProfileArn?: string;
}
