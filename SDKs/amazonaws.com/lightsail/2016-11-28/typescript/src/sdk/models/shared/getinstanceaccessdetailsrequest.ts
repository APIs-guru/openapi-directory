import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceAccessProtocolEnum } from "./instanceaccessprotocolenum";



export class GetInstanceAccessDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: InstanceAccessProtocolEnum;
}
