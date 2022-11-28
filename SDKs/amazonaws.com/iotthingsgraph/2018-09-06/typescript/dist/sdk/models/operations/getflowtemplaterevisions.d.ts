import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFlowTemplateRevisionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetFlowTemplateRevisionsXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetFlowTemplateRevisions = "IotThingsGraphFrontEndService.GetFlowTemplateRevisions"
}
export declare class GetFlowTemplateRevisionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFlowTemplateRevisionsXAmzTargetEnum;
}
export declare class GetFlowTemplateRevisionsRequest extends SpeakeasyBase {
    queryParams: GetFlowTemplateRevisionsQueryParams;
    headers: GetFlowTemplateRevisionsHeaders;
    request: shared.GetFlowTemplateRevisionsRequest;
}
export declare class GetFlowTemplateRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    getFlowTemplateRevisionsResponse?: shared.GetFlowTemplateRevisionsResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
