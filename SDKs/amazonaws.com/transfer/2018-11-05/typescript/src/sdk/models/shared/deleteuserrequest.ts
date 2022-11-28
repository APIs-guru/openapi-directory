import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
