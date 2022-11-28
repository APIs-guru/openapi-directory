import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetOperationsLogStatusNumEnum {
    Zero = "0",
    One = "1"
}
export declare class GetOperationsLogQueryParams extends SpeakeasyBase {
    amendmentIndicator?: string[];
    apiKey: string;
    beginningImageNumber?: string[];
    candidateCommitteeId?: string[];
    formType?: string[];
    maxCoverageEndDate?: Date;
    maxReceiptDate?: Date;
    maxTransactionDataCompleteDate?: Date;
    minCoverageEndDate?: Date;
    minReceiptDate?: Date;
    minTransactionDataCompleteDate?: Date;
    page?: number;
    perPage?: number;
    reportType?: string[];
    reportYear?: number[];
    sort?: string[];
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    statusNum?: GetOperationsLogStatusNumEnum[];
}
export declare class GetOperationsLogRequest extends SpeakeasyBase {
    queryParams: GetOperationsLogQueryParams;
}
export declare class GetOperationsLogResponse extends SpeakeasyBase {
    contentType: string;
    operationsLogPage?: shared.OperationsLogPage;
    statusCode: number;
}
