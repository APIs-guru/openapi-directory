import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpgradeLensReviewPathParams extends SpeakeasyBase {
    lensAlias: string;
    workloadId: string;
}
export declare class UpgradeLensReviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpgradeLensReviewRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    milestoneName: string;
}
export declare class UpgradeLensReviewRequest extends SpeakeasyBase {
    pathParams: UpgradeLensReviewPathParams;
    headers: UpgradeLensReviewHeaders;
    request: UpgradeLensReviewRequestBody;
}
export declare class UpgradeLensReviewResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
