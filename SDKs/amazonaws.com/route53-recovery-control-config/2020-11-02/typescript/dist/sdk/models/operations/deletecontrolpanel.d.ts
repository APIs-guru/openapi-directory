import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteControlPanelPathParams extends SpeakeasyBase {
    controlPanelArn: string;
}
export declare class DeleteControlPanelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteControlPanelRequest extends SpeakeasyBase {
    pathParams: DeleteControlPanelPathParams;
    headers: DeleteControlPanelHeaders;
}
export declare class DeleteControlPanelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteControlPanelResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
