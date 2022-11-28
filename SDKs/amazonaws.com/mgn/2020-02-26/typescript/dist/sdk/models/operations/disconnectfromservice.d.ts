import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisconnectFromServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisconnectFromServiceRequestBody extends SpeakeasyBase {
    sourceServerId: string;
}
export declare class DisconnectFromServiceRequest extends SpeakeasyBase {
    headers: DisconnectFromServiceHeaders;
    request: DisconnectFromServiceRequestBody;
}
export declare class DisconnectFromServiceResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFoundException?: any;
    sourceServer?: shared.SourceServer;
    statusCode: number;
    uninitializedAccountException?: any;
}
