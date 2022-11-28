import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteQueuedSavingsPlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteQueuedSavingsPlanRequestBody extends SpeakeasyBase {
    savingsPlanId: string;
}
export declare class DeleteQueuedSavingsPlanRequest extends SpeakeasyBase {
    headers: DeleteQueuedSavingsPlanHeaders;
    request: DeleteQueuedSavingsPlanRequestBody;
}
export declare class DeleteQueuedSavingsPlanResponse extends SpeakeasyBase {
    contentType: string;
    deleteQueuedSavingsPlanResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
