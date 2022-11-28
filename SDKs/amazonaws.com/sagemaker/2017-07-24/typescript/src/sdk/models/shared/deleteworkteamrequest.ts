import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWorkteamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkteamName" })
  workteamName: string;
}
