import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ImportKeyPairXAmzTargetEnum {
    Lightsail20161128ImportKeyPair = "Lightsail_20161128.ImportKeyPair"
}
export declare class ImportKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportKeyPairXAmzTargetEnum;
}
export declare class ImportKeyPairRequest extends SpeakeasyBase {
    headers: ImportKeyPairHeaders;
    request: shared.ImportKeyPairRequest;
}
export declare class ImportKeyPairResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    importKeyPairResult?: shared.ImportKeyPairResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
