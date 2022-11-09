import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteServerXAmzTargetEnum {
    OpsWorksCmV20161101DeleteServer = "OpsWorksCM_V2016_11_01.DeleteServer"
}
export declare class DeleteServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServerXAmzTargetEnum;
}
export declare class DeleteServerRequest extends SpeakeasyBase {
    headers: DeleteServerHeaders;
    request: shared.DeleteServerRequest;
}
export declare class DeleteServerResponse extends SpeakeasyBase {
    contentType: string;
    deleteServerResponse?: Map<string, any>;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
