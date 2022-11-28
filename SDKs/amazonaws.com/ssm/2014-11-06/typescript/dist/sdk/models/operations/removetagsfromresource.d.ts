import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveTagsFromResourceXAmzTargetEnum {
    AmazonSsmRemoveTagsFromResource = "AmazonSSM.RemoveTagsFromResource"
}
export declare class RemoveTagsFromResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsFromResourceXAmzTargetEnum;
}
export declare class RemoveTagsFromResourceRequest extends SpeakeasyBase {
    headers: RemoveTagsFromResourceHeaders;
    request: shared.RemoveTagsFromResourceRequest;
}
export declare class RemoveTagsFromResourceResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidResourceId?: any;
    invalidResourceType?: any;
    removeTagsFromResourceResult?: Map<string, any>;
    statusCode: number;
    tooManyUpdates?: any;
}
