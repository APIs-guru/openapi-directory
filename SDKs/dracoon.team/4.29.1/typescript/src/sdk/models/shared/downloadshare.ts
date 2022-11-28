import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";



// DownloadShare
/** 
 * Download Share information
**/
export class DownloadShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKey" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: number;

  @SpeakeasyMetadata({ data: "json, name=cntDownloads" })
  cntDownloads: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=dataUrl" })
  dataUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=internalNotes" })
  internalNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isProtected" })
  isProtected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxDownloads" })
  maxDownloads?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId: number;

  @SpeakeasyMetadata({ data: "json, name=nodePath" })
  nodePath?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeType" })
  nodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=notifyCreator" })
  notifyCreator: boolean;

  @SpeakeasyMetadata({ data: "json, name=recipients" })
  recipients?: string;

  @SpeakeasyMetadata({ data: "json, name=showCreatorName" })
  showCreatorName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showCreatorUsername" })
  showCreatorUsername?: boolean;

  @SpeakeasyMetadata({ data: "json, name=smsRecipients" })
  smsRecipients?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
