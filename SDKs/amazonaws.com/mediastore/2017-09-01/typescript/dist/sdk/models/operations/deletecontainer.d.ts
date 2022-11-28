import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteContainerXAmzTargetEnum {
    MediaStore20170901DeleteContainer = "MediaStore_20170901.DeleteContainer"
}
export declare class DeleteContainerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteContainerXAmzTargetEnum;
}
export declare class DeleteContainerRequest extends SpeakeasyBase {
    headers: DeleteContainerHeaders;
    request: shared.DeleteContainerInput;
}
export declare class DeleteContainerResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    deleteContainerOutput?: Map<string, any>;
    internalServerError?: any;
    statusCode: number;
}
