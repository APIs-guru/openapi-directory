import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;
}
