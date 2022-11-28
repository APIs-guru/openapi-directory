import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFindingsFilterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateFindingsFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateFindingsFilterRequestBodyActionEnum {
    Archive = "ARCHIVE",
    Noop = "NOOP"
}
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export declare class UpdateFindingsFilterRequestBodyFindingCriteria extends SpeakeasyBase {
    criterion?: Map<string, shared.CriterionAdditionalProperties>;
}
export declare class UpdateFindingsFilterRequestBody extends SpeakeasyBase {
    action?: UpdateFindingsFilterRequestBodyActionEnum;
    clientToken?: string;
    description?: string;
    findingCriteria?: UpdateFindingsFilterRequestBodyFindingCriteria;
    name?: string;
    position?: number;
}
export declare class UpdateFindingsFilterRequest extends SpeakeasyBase {
    pathParams: UpdateFindingsFilterPathParams;
    headers: UpdateFindingsFilterHeaders;
    request: UpdateFindingsFilterRequestBody;
}
export declare class UpdateFindingsFilterResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateFindingsFilterResponse?: shared.UpdateFindingsFilterResponse;
    validationException?: any;
}
