import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserInfo } from "./userinfo";
import { UserInfo } from "./userinfo";


// DownloadShare
/** 
 * Download Share information
**/
export class DownloadShare extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKey" })
  accessKey: string;

  @Metadata({ data: "json, name=classification" })
  classification?: number;

  @Metadata({ data: "json, name=cntDownloads" })
  cntDownloads: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy: UserInfo;

  @Metadata({ data: "json, name=dataUrl" })
  dataUrl?: string;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=internalNotes" })
  internalNotes?: string;

  @Metadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @Metadata({ data: "json, name=isProtected" })
  isProtected?: boolean;

  @Metadata({ data: "json, name=maxDownloads" })
  maxDownloads?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=nodeId" })
  nodeId: number;

  @Metadata({ data: "json, name=nodePath" })
  nodePath?: string;

  @Metadata({ data: "json, name=nodeType" })
  nodeType?: string;

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

  @Metadata({ data: "json, name=smsRecipients" })
  smsRecipients?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
