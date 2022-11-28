import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolEnum } from "./protocolenum";
export declare class TestIdentityProviderRequest extends SpeakeasyBase {
    serverId: string;
    serverProtocol?: ProtocolEnum;
    sourceIp?: string;
    userName: string;
    userPassword?: string;
}
