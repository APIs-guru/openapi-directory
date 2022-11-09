import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolMqttGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolMqttGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttGetTracePathParams;
}
export declare class ProtocolMqttGetTraceResponse extends SpeakeasyBase {
    configMqtt?: shared.ConfigMqtt;
    contentType: string;
    statusCode: number;
}
