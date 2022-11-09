import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateS3ResourcesXAmzTargetEnum {
    MacieServiceUpdateS3Resources = "MacieService.UpdateS3Resources"
}
export declare class UpdateS3ResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateS3ResourcesXAmzTargetEnum;
}
export declare class UpdateS3ResourcesRequest extends SpeakeasyBase {
    headers: UpdateS3ResourcesHeaders;
    request: shared.UpdateS3ResourcesRequest;
}
export declare class UpdateS3ResourcesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    statusCode: number;
    updateS3ResourcesResult?: shared.UpdateS3ResourcesResult;
}
