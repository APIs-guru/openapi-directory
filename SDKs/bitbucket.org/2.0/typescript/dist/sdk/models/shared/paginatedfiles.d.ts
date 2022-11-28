import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of commit_file objects.
**/
export declare class PaginatedFiles extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
