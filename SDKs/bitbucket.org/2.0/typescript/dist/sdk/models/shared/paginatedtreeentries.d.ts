import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of commit_file and/or commit_directory objects.
**/
export declare class PaginatedTreeentries extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
