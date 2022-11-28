import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNamesAuditCandidatesQueryParams extends SpeakeasyBase {
    apiKey: string;
    q: string[];
}
export declare class GetNamesAuditCandidatesRequest extends SpeakeasyBase {
    queryParams: GetNamesAuditCandidatesQueryParams;
}
export declare class GetNamesAuditCandidatesResponse extends SpeakeasyBase {
    auditCandidateSearchList?: shared.AuditCandidateSearchList;
    contentType: string;
    statusCode: number;
}
