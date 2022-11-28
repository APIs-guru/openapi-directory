import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutQueryDefinitionXAmzTargetEnum {
    Logs20140328PutQueryDefinition = "Logs_20140328.PutQueryDefinition"
}
export declare class PutQueryDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutQueryDefinitionXAmzTargetEnum;
}
export declare class PutQueryDefinitionRequest extends SpeakeasyBase {
    headers: PutQueryDefinitionHeaders;
    request: shared.PutQueryDefinitionRequest;
}
export declare class PutQueryDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    putQueryDefinitionResponse?: shared.PutQueryDefinitionResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
