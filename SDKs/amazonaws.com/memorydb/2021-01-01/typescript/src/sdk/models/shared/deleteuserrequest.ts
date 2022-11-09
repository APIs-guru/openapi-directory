import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
