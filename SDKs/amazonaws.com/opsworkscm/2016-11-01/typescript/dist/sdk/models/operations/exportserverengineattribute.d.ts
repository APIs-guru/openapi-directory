import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExportServerEngineAttributeXAmzTargetEnum {
    OpsWorksCmV20161101ExportServerEngineAttribute = "OpsWorksCM_V2016_11_01.ExportServerEngineAttribute"
}
export declare class ExportServerEngineAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportServerEngineAttributeXAmzTargetEnum;
}
export declare class ExportServerEngineAttributeRequest extends SpeakeasyBase {
    headers: ExportServerEngineAttributeHeaders;
    request: shared.ExportServerEngineAttributeRequest;
}
export declare class ExportServerEngineAttributeResponse extends SpeakeasyBase {
    contentType: string;
    exportServerEngineAttributeResponse?: shared.ExportServerEngineAttributeResponse;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
