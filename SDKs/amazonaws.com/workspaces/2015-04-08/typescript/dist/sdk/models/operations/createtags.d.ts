import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTagsXAmzTargetEnum {
    WorkspacesServiceCreateTags = "WorkspacesService.CreateTags"
}
export declare class CreateTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTagsXAmzTargetEnum;
}
export declare class CreateTagsRequest extends SpeakeasyBase {
    headers: CreateTagsHeaders;
    request: shared.CreateTagsRequest;
}
export declare class CreateTagsResponse extends SpeakeasyBase {
    contentType: string;
    createTagsResult?: Map<string, any>;
    invalidParameterValuesException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
