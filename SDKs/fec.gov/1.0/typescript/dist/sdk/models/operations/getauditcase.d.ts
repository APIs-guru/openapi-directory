import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAuditCaseQueryParams extends SpeakeasyBase {
    apiKey: string;
    auditCaseId?: string[];
    auditId?: number[];
    candidateId?: string[];
    committeeDesignation?: string;
    committeeId?: string[];
    committeeType?: string[];
    cycle?: number[];
    maxElectionCycle?: number;
    minElectionCycle?: number;
    page?: number;
    perPage?: number;
    primaryCategoryId?: string;
    q?: string[];
    qq?: string[];
    sort?: string[];
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    subCategoryId?: string;
}
export declare class GetAuditCaseRequest extends SpeakeasyBase {
    queryParams: GetAuditCaseQueryParams;
}
export declare class GetAuditCaseResponse extends SpeakeasyBase {
    auditCasePage?: shared.AuditCasePage;
    contentType: string;
    statusCode: number;
}
