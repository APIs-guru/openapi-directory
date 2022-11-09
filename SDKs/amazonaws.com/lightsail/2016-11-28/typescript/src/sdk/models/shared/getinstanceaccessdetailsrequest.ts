import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceAccessProtocolEnum } from "./instanceaccessprotocolenum";


export class GetInstanceAccessDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: InstanceAccessProtocolEnum;
}
