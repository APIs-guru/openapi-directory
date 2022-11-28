import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of issue attachments.
**/
export declare class PaginatedIssueAttachments extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
