import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationDataTransfer } from "./applicationdatatransfer";


// DataTransfer
/** 
 * A Transfer resource represents the transfer of the ownership of user data between users.
**/
export class DataTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationDataTransfers", elemType: shared.ApplicationDataTransfer })
  applicationDataTransfers?: ApplicationDataTransfer[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=newOwnerUserId" })
  newOwnerUserId?: string;

  @Metadata({ data: "json, name=oldOwnerUserId" })
  oldOwnerUserId?: string;

  @Metadata({ data: "json, name=overallTransferStatusCode" })
  overallTransferStatusCode?: string;

  @Metadata({ data: "json, name=requestTime" })
  requestTime?: Date;
}
