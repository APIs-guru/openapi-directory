import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteTrackerPathParams extends SpeakeasyBase {
    trackerName: string;
}
export declare class DeleteTrackerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteTrackerRequest extends SpeakeasyBase {
    pathParams: DeleteTrackerPathParams;
    headers: DeleteTrackerHeaders;
}
export declare class DeleteTrackerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteTrackerResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
