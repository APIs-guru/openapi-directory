import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSystemTemplateRevisionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetSystemTemplateRevisionsXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetSystemTemplateRevisions = "IotThingsGraphFrontEndService.GetSystemTemplateRevisions"
}
export declare class GetSystemTemplateRevisionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSystemTemplateRevisionsXAmzTargetEnum;
}
export declare class GetSystemTemplateRevisionsRequest extends SpeakeasyBase {
    queryParams: GetSystemTemplateRevisionsQueryParams;
    headers: GetSystemTemplateRevisionsHeaders;
    request: shared.GetSystemTemplateRevisionsRequest;
}
export declare class GetSystemTemplateRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    getSystemTemplateRevisionsResponse?: shared.GetSystemTemplateRevisionsResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
