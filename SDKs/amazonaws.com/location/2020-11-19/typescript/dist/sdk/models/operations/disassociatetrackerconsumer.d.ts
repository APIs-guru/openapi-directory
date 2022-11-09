import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DisassociateTrackerConsumerPathParams extends SpeakeasyBase {
    consumerArn: string;
    trackerName: string;
}
export declare class DisassociateTrackerConsumerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateTrackerConsumerRequest extends SpeakeasyBase {
    pathParams: DisassociateTrackerConsumerPathParams;
    headers: DisassociateTrackerConsumerHeaders;
}
export declare class DisassociateTrackerConsumerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    disassociateTrackerConsumerResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
