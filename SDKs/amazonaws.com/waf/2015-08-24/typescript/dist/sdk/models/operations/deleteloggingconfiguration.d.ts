import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteLoggingConfigurationXAmzTargetEnum {
    Awswaf20150824DeleteLoggingConfiguration = "AWSWAF_20150824.DeleteLoggingConfiguration"
}
export declare class DeleteLoggingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLoggingConfigurationXAmzTargetEnum;
}
export declare class DeleteLoggingConfigurationRequest extends SpeakeasyBase {
    headers: DeleteLoggingConfigurationHeaders;
    request: shared.DeleteLoggingConfigurationRequest;
}
export declare class DeleteLoggingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    deleteLoggingConfigurationResponse?: Map<string, any>;
    statusCode: number;
    wafInternalErrorException?: any;
    wafNonexistentItemException?: any;
    wafStaleDataException?: any;
}
