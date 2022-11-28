import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;
}
