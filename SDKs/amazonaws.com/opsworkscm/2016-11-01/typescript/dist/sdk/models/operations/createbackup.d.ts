import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBackupXAmzTargetEnum {
    OpsWorksCmV20161101CreateBackup = "OpsWorksCM_V2016_11_01.CreateBackup"
}
export declare class CreateBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBackupXAmzTargetEnum;
}
export declare class CreateBackupRequest extends SpeakeasyBase {
    headers: CreateBackupHeaders;
    request: shared.CreateBackupRequest;
}
export declare class CreateBackupResponse extends SpeakeasyBase {
    contentType: string;
    createBackupResponse?: shared.CreateBackupResponse;
    invalidStateException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
