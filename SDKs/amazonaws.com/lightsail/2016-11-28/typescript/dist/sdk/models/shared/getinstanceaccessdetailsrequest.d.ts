import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAccessProtocolEnum } from "./instanceaccessprotocolenum";
export declare class GetInstanceAccessDetailsRequest extends SpeakeasyBase {
    instanceName: string;
    protocol?: InstanceAccessProtocolEnum;
}
