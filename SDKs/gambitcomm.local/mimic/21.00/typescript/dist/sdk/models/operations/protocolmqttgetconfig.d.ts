import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProtocolMqttGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolMqttGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttGetConfigPathParams;
}
export declare class ProtocolMqttGetConfigResponse extends SpeakeasyBase {
    configMqtt?: shared.ConfigMqtt;
    contentType: string;
    statusCode: number;
}
