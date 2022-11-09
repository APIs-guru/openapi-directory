import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWorkteamRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkteamName" })
  workteamName: string;
}
