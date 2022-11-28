import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteResponsePlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteResponsePlanRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class DeleteResponsePlanRequest extends SpeakeasyBase {
    headers: DeleteResponsePlanHeaders;
    request: DeleteResponsePlanRequestBody;
}
export declare class DeleteResponsePlanResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteResponsePlanOutput?: Map<string, any>;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
