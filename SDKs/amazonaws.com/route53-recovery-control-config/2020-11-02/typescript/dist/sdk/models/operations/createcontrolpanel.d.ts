import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateControlPanelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateControlPanelRequestBody extends SpeakeasyBase {
    clientToken?: string;
    clusterArn: string;
    controlPanelName: string;
}
export declare class CreateControlPanelRequest extends SpeakeasyBase {
    headers: CreateControlPanelHeaders;
    request: CreateControlPanelRequestBody;
}
export declare class CreateControlPanelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createControlPanelResponse?: shared.CreateControlPanelResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
