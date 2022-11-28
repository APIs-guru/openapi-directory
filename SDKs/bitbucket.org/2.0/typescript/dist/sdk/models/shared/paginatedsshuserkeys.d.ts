import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A paginated list of SSH keys.
**/
export declare class PaginatedSshUserKeys extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: Map<string, any>[];
}
