import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteConnectorPathParams extends SpeakeasyBase {
    connectorArn: string;
}
export declare class DeleteConnectorQueryParams extends SpeakeasyBase {
    currentVersion?: string;
}
export declare class DeleteConnectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteConnectorRequest extends SpeakeasyBase {
    pathParams: DeleteConnectorPathParams;
    queryParams: DeleteConnectorQueryParams;
    headers: DeleteConnectorHeaders;
}
export declare class DeleteConnectorResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteConnectorResponse?: shared.DeleteConnectorResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
