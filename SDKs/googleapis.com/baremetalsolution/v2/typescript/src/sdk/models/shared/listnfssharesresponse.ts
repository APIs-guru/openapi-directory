import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NfsShare } from "./nfsshare";



// ListNfsSharesResponse
/** 
 * Response message containing the list of NFS shares.
**/
export class ListNfsSharesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nfsShares", elemType: NfsShare })
  nfsShares?: NfsShare[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
