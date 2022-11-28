import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeSavingsPlansHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSavingsPlansRequestBody extends SpeakeasyBase {
    filters?: shared.SavingsPlanFilter[];
    maxResults?: number;
    nextToken?: string;
    savingsPlanArns?: string[];
    savingsPlanIds?: string[];
    states?: shared.SavingsPlanStateEnum[];
}
export declare class DescribeSavingsPlansRequest extends SpeakeasyBase {
    headers: DescribeSavingsPlansHeaders;
    request: DescribeSavingsPlansRequestBody;
}
export declare class DescribeSavingsPlansResponse extends SpeakeasyBase {
    contentType: string;
    describeSavingsPlansResponse?: shared.DescribeSavingsPlansResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
