import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWorkteamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Success" })
  success: boolean;
}
