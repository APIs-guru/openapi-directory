import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";



// UploadShare
/** 
 * Upload Share information
**/
export class UploadShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKey" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "json, name=cntFiles" })
  cntFiles?: number;

  @SpeakeasyMetadata({ data: "json, name=cntUploads" })
  cntUploads?: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=dataUrl" })
  dataUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=filesExpiryPeriod" })
  filesExpiryPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=internalNotes" })
  internalNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isProtected" })
  isProtected: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSlots" })
  maxSlots?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

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

  @SpeakeasyMetadata({ data: "json, name=showUploadedFiles" })
  showUploadedFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=smsRecipients" })
  smsRecipients?: string;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId: number;

  @SpeakeasyMetadata({ data: "json, name=targetPath" })
  targetPath?: string;

  @SpeakeasyMetadata({ data: "json, name=targetType" })
  targetType?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
