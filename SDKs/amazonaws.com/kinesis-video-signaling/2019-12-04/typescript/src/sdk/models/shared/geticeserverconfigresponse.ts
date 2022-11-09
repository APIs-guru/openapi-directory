import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IceServer } from "./iceserver";


export class GetIceServerConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IceServerList", elemType: shared.IceServer })
  iceServerList?: IceServer[];
}
