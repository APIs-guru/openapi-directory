import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CancelStatementXAmzTargetEnum {
    RedshiftDataCancelStatement = "RedshiftData.CancelStatement"
}
export declare class CancelStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelStatementXAmzTargetEnum;
}
export declare class CancelStatementRequest extends SpeakeasyBase {
    headers: CancelStatementHeaders;
    request: shared.CancelStatementRequest;
}
export declare class CancelStatementResponse extends SpeakeasyBase {
    cancelStatementResponse?: shared.CancelStatementResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
