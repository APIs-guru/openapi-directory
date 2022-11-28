import { SpeakeasyBase } from "../../../internal/utils";
import { NfsShare } from "./nfsshare";
/**
 * Response message containing the list of NFS shares.
**/
export declare class ListNfsSharesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    nfsShares?: NfsShare[];
    unreachable?: string[];
}
