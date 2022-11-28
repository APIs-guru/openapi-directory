import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNamesAuditCommitteesQueryParams extends SpeakeasyBase {
    apiKey: string;
    q: string[];
}
export declare class GetNamesAuditCommitteesRequest extends SpeakeasyBase {
    queryParams: GetNamesAuditCommitteesQueryParams;
}
export declare class GetNamesAuditCommitteesResponse extends SpeakeasyBase {
    auditCommitteeSearchList?: shared.AuditCommitteeSearchList;
    contentType: string;
    statusCode: number;
}
