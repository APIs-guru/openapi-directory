import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;
}
