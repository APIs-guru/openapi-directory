import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddTagsToResourceXAmzTargetEnum {
    AmazonSsmAddTagsToResource = "AmazonSSM.AddTagsToResource"
}
export declare class AddTagsToResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsToResourceXAmzTargetEnum;
}
export declare class AddTagsToResourceRequest extends SpeakeasyBase {
    headers: AddTagsToResourceHeaders;
    request: shared.AddTagsToResourceRequest;
}
export declare class AddTagsToResourceResponse extends SpeakeasyBase {
    addTagsToResourceResult?: Map<string, any>;
    contentType: string;
    internalServerError?: any;
    invalidResourceId?: any;
    invalidResourceType?: any;
    statusCode: number;
    tooManyTagsError?: any;
    tooManyUpdates?: any;
}
