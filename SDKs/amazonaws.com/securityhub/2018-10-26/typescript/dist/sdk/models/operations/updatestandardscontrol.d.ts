import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateStandardsControlPathParams extends SpeakeasyBase {
    standardsControlArn: string;
}
export declare class UpdateStandardsControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateStandardsControlRequestBodyControlStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateStandardsControlRequestBody extends SpeakeasyBase {
    controlStatus?: UpdateStandardsControlRequestBodyControlStatusEnum;
    disabledReason?: string;
}
export declare class UpdateStandardsControlRequest extends SpeakeasyBase {
    pathParams: UpdateStandardsControlPathParams;
    headers: UpdateStandardsControlHeaders;
    request: UpdateStandardsControlRequestBody;
}
export declare class UpdateStandardsControlResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateStandardsControlResponse?: Map<string, any>;
}
