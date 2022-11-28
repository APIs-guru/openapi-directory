import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFindingsFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateFindingsFilterRequestBodyActionEnum {
    Archive = "ARCHIVE",
    Noop = "NOOP"
}
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export declare class CreateFindingsFilterRequestBodyFindingCriteria extends SpeakeasyBase {
    criterion?: Map<string, shared.CriterionAdditionalProperties>;
}
export declare class CreateFindingsFilterRequestBody extends SpeakeasyBase {
    action: CreateFindingsFilterRequestBodyActionEnum;
    clientToken?: string;
    description?: string;
    findingCriteria: CreateFindingsFilterRequestBodyFindingCriteria;
    name: string;
    position?: number;
    tags?: Map<string, string>;
}
export declare class CreateFindingsFilterRequest extends SpeakeasyBase {
    headers: CreateFindingsFilterHeaders;
    request: CreateFindingsFilterRequestBody;
}
export declare class CreateFindingsFilterResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createFindingsFilterResponse?: shared.CreateFindingsFilterResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
