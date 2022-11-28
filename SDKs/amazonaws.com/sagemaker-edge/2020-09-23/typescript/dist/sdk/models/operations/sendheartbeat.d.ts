import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendHeartbeatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SendHeartbeatRequestBody extends SpeakeasyBase {
    agentMetrics?: shared.EdgeMetric[];
    agentVersion: string;
    deviceFleetName: string;
    deviceName: string;
    models?: shared.Model[];
}
export declare class SendHeartbeatRequest extends SpeakeasyBase {
    headers: SendHeartbeatHeaders;
    request: SendHeartbeatRequestBody;
}
export declare class SendHeartbeatResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    statusCode: number;
}
