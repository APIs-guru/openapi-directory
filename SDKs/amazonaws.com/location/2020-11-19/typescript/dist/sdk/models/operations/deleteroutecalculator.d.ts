import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRouteCalculatorPathParams extends SpeakeasyBase {
    calculatorName: string;
}
export declare class DeleteRouteCalculatorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRouteCalculatorRequest extends SpeakeasyBase {
    pathParams: DeleteRouteCalculatorPathParams;
    headers: DeleteRouteCalculatorHeaders;
}
export declare class DeleteRouteCalculatorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteRouteCalculatorResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
