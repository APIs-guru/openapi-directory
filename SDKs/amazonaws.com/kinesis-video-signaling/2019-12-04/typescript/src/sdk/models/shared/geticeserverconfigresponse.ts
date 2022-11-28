import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IceServer } from "./iceserver";



export class GetIceServerConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IceServerList", elemType: IceServer })
  iceServerList?: IceServer[];
}
