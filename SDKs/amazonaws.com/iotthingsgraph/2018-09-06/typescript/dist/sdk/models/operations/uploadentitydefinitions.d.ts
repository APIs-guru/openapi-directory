import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UploadEntityDefinitionsXAmzTargetEnum {
    IotThingsGraphFrontEndServiceUploadEntityDefinitions = "IotThingsGraphFrontEndService.UploadEntityDefinitions"
}
export declare class UploadEntityDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UploadEntityDefinitionsXAmzTargetEnum;
}
export declare class UploadEntityDefinitionsRequest extends SpeakeasyBase {
    headers: UploadEntityDefinitionsHeaders;
    request: shared.UploadEntityDefinitionsRequest;
}
export declare class UploadEntityDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
    uploadEntityDefinitionsResponse?: shared.UploadEntityDefinitionsResponse;
}
