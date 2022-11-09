import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserId" })
  userId?: string;
}
