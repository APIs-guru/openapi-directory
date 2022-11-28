import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;
}
