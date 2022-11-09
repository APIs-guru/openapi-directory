import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationTransferParam } from "./applicationtransferparam";


// ApplicationDataTransfer
/** 
 * Template to map fields of ApplicationDataTransfer resource.
**/
export class ApplicationDataTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationId" })
  applicationId?: string;

  @Metadata({ data: "json, name=applicationTransferParams", elemType: shared.ApplicationTransferParam })
  applicationTransferParams?: ApplicationTransferParam[];

  @Metadata({ data: "json, name=applicationTransferStatus" })
  applicationTransferStatus?: string;
}
