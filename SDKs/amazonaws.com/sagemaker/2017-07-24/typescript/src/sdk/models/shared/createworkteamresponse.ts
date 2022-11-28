import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWorkteamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkteamArn" })
  workteamArn?: string;
}
