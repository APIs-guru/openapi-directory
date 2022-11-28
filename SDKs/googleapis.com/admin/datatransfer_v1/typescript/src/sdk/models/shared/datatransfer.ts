import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDataTransfer } from "./applicationdatatransfer";



// DataTransfer
/** 
 * A Transfer resource represents the transfer of the ownership of user data between users.
**/
export class DataTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationDataTransfers", elemType: ApplicationDataTransfer })
  applicationDataTransfers?: ApplicationDataTransfer[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=newOwnerUserId" })
  newOwnerUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=oldOwnerUserId" })
  oldOwnerUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=overallTransferStatusCode" })
  overallTransferStatusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=requestTime" })
  requestTime?: Date;
}
