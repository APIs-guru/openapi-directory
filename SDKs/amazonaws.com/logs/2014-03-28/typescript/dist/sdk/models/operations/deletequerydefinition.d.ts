import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteQueryDefinitionXAmzTargetEnum {
    Logs20140328DeleteQueryDefinition = "Logs_20140328.DeleteQueryDefinition"
}
export declare class DeleteQueryDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteQueryDefinitionXAmzTargetEnum;
}
export declare class DeleteQueryDefinitionRequest extends SpeakeasyBase {
    headers: DeleteQueryDefinitionHeaders;
    request: shared.DeleteQueryDefinitionRequest;
}
export declare class DeleteQueryDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    deleteQueryDefinitionResponse?: shared.DeleteQueryDefinitionResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
