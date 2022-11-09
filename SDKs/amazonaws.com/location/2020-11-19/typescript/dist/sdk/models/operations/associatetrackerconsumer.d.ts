import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AssociateTrackerConsumerPathParams extends SpeakeasyBase {
    trackerName: string;
}
export declare class AssociateTrackerConsumerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateTrackerConsumerRequestBody extends SpeakeasyBase {
    consumerArn: string;
}
export declare class AssociateTrackerConsumerRequest extends SpeakeasyBase {
    pathParams: AssociateTrackerConsumerPathParams;
    headers: AssociateTrackerConsumerHeaders;
    request: AssociateTrackerConsumerRequestBody;
}
export declare class AssociateTrackerConsumerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    associateTrackerConsumerResponse?: Map<string, any>;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
