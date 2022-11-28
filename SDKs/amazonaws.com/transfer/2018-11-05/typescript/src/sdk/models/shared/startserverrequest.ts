import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;
}
