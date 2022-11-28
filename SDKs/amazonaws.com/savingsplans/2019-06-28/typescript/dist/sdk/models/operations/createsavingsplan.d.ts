import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSavingsPlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSavingsPlanRequestBody extends SpeakeasyBase {
    clientToken?: string;
    commitment: string;
    purchaseTime?: Date;
    savingsPlanOfferingId: string;
    tags?: Map<string, string>;
    upfrontPaymentAmount?: string;
}
export declare class CreateSavingsPlanRequest extends SpeakeasyBase {
    headers: CreateSavingsPlanHeaders;
    request: CreateSavingsPlanRequestBody;
}
export declare class CreateSavingsPlanResponse extends SpeakeasyBase {
    contentType: string;
    createSavingsPlanResponse?: shared.CreateSavingsPlanResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
