import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBackupXAmzTargetEnum {
    OpsWorksCmV20161101DeleteBackup = "OpsWorksCM_V2016_11_01.DeleteBackup"
}
export declare class DeleteBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBackupXAmzTargetEnum;
}
export declare class DeleteBackupRequest extends SpeakeasyBase {
    headers: DeleteBackupHeaders;
    request: shared.DeleteBackupRequest;
}
export declare class DeleteBackupResponse extends SpeakeasyBase {
    contentType: string;
    deleteBackupResponse?: Map<string, any>;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
