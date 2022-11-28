import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateControlPanelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateControlPanelRequestBody extends SpeakeasyBase {
    controlPanelArn: string;
    controlPanelName: string;
}
export declare class UpdateControlPanelRequest extends SpeakeasyBase {
    headers: UpdateControlPanelHeaders;
    request: UpdateControlPanelRequestBody;
}
export declare class UpdateControlPanelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateControlPanelResponse?: shared.UpdateControlPanelResponse;
    validationException?: any;
}
