import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NfsShare } from "./nfsshare";


// ListNfsSharesResponse
/** 
 * Response message containing the list of NFS shares.
**/
export class ListNfsSharesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=nfsShares", elemType: shared.NfsShare })
  nfsShares?: NfsShare[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
