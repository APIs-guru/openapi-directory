import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportsForCommitPathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetReportsForCommitRequest extends SpeakeasyBase {
    pathParams: GetReportsForCommitPathParams;
}
export declare class GetReportsForCommitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedReports?: shared.PaginatedReports;
}
