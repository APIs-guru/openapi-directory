import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublicUploadedFileData } from "./publicuploadedfiledata";
import { UserUserPublicKeyList } from "./useruserpublickeylist";


// PublicUploadShare
/** 
 * Upload Share information
**/
export class PublicUploadShare extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=creatorName" })
  creatorName: string;

  @Metadata({ data: "json, name=creatorUsername" })
  creatorUsername?: string;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @Metadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @Metadata({ data: "json, name=isProtected" })
  isProtected: boolean;

  @Metadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @Metadata({ data: "json, name=maxSlots" })
  maxSlots: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=remainingSize" })
  remainingSize?: number;

  @Metadata({ data: "json, name=remainingSlots" })
  remainingSlots?: number;

  @Metadata({ data: "json, name=showUploadedFiles" })
  showUploadedFiles?: boolean;

  @Metadata({ data: "json, name=uploadedFiles", elemType: shared.PublicUploadedFileData })
  uploadedFiles?: PublicUploadedFileData[];

  @Metadata({ data: "json, name=userUserPublicKeyList" })
  userUserPublicKeyList?: UserUserPublicKeyList;
}
