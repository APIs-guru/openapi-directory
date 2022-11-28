import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ImportTerminologyXAmzTargetEnum {
    AwsShineFrontendService20170701ImportTerminology = "AWSShineFrontendService_20170701.ImportTerminology"
}
export declare class ImportTerminologyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportTerminologyXAmzTargetEnum;
}
export declare class ImportTerminologyRequest extends SpeakeasyBase {
    headers: ImportTerminologyHeaders;
    request: shared.ImportTerminologyRequest;
}
export declare class ImportTerminologyResponse extends SpeakeasyBase {
    contentType: string;
    importTerminologyResponse?: shared.ImportTerminologyResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
