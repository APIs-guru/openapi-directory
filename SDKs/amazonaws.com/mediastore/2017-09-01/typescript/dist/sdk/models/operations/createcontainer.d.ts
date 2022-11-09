import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateContainerXAmzTargetEnum {
    MediaStore20170901CreateContainer = "MediaStore_20170901.CreateContainer"
}
export declare class CreateContainerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContainerXAmzTargetEnum;
}
export declare class CreateContainerRequest extends SpeakeasyBase {
    headers: CreateContainerHeaders;
    request: shared.CreateContainerInput;
}
export declare class CreateContainerResponse extends SpeakeasyBase {
    containerInUseException?: any;
    contentType: string;
    createContainerOutput?: shared.CreateContainerOutput;
    internalServerError?: any;
    limitExceededException?: any;
    statusCode: number;
}
