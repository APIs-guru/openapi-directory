import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationTransferParam } from "./applicationtransferparam";



// ApplicationDataTransfer
/** 
 * Template to map fields of ApplicationDataTransfer resource.
**/
export class ApplicationDataTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=applicationTransferParams", elemType: ApplicationTransferParam })
  applicationTransferParams?: ApplicationTransferParam[];

  @SpeakeasyMetadata({ data: "json, name=applicationTransferStatus" })
  applicationTransferStatus?: string;
}
