import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserInfo } from "./userinfo";
import { UserInfo } from "./userinfo";


// UploadShare
/** 
 * Upload Share information
**/
export class UploadShare extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKey" })
  accessKey: string;

  @Metadata({ data: "json, name=cntFiles" })
  cntFiles?: number;

  @Metadata({ data: "json, name=cntUploads" })
  cntUploads?: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy: UserInfo;

  @Metadata({ data: "json, name=dataUrl" })
  dataUrl?: string;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @Metadata({ data: "json, name=filesExpiryPeriod" })
  filesExpiryPeriod?: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=internalNotes" })
  internalNotes?: string;

  @Metadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @Metadata({ data: "json, name=isProtected" })
  isProtected: boolean;

  @Metadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @Metadata({ data: "json, name=maxSlots" })
  maxSlots?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=notifyCreator" })
  notifyCreator: boolean;

  @Metadata({ data: "json, name=recipients" })
  recipients?: string;

  @Metadata({ data: "json, name=showCreatorName" })
  showCreatorName?: boolean;

  @Metadata({ data: "json, name=showCreatorUsername" })
  showCreatorUsername?: boolean;

  @Metadata({ data: "json, name=showUploadedFiles" })
  showUploadedFiles?: boolean;

  @Metadata({ data: "json, name=smsRecipients" })
  smsRecipients?: string;

  @Metadata({ data: "json, name=targetId" })
  targetId: number;

  @Metadata({ data: "json, name=targetPath" })
  targetPath?: string;

  @Metadata({ data: "json, name=targetType" })
  targetType?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
