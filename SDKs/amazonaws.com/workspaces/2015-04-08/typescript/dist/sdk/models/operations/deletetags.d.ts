import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTagsXAmzTargetEnum {
    WorkspacesServiceDeleteTags = "WorkspacesService.DeleteTags"
}
export declare class DeleteTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTagsXAmzTargetEnum;
}
export declare class DeleteTagsRequest extends SpeakeasyBase {
    headers: DeleteTagsHeaders;
    request: shared.DeleteTagsRequest;
}
export declare class DeleteTagsResponse extends SpeakeasyBase {
    contentType: string;
    deleteTagsResult?: Map<string, any>;
    invalidParameterValuesException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
