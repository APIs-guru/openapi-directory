import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateConnectorPathParams extends SpeakeasyBase {
    connectorArn: string;
}
export declare class UpdateConnectorQueryParams extends SpeakeasyBase {
    currentVersion: string;
}
export declare class UpdateConnectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The target capacity for the connector. The capacity can be auto scaled or provisioned.
**/
export declare class UpdateConnectorRequestBodyCapacity extends SpeakeasyBase {
    autoScaling?: shared.AutoScalingUpdate;
    provisionedCapacity?: shared.ProvisionedCapacityUpdate;
}
export declare class UpdateConnectorRequestBody extends SpeakeasyBase {
    capacity: UpdateConnectorRequestBodyCapacity;
}
export declare class UpdateConnectorRequest extends SpeakeasyBase {
    pathParams: UpdateConnectorPathParams;
    queryParams: UpdateConnectorQueryParams;
    headers: UpdateConnectorHeaders;
    request: UpdateConnectorRequestBody;
}
export declare class UpdateConnectorResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    updateConnectorResponse?: shared.UpdateConnectorResponse;
}
