import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicUploadedFileData } from "./publicuploadedfiledata";
import { UserUserPublicKeyListOutput } from "./useruserpublickeylist";



// PublicUploadShareOutput
/** 
 * Upload Share information
**/
export class PublicUploadShareOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=creatorName" })
  creatorName: string;

  @SpeakeasyMetadata({ data: "json, name=creatorUsername" })
  creatorUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isProtected" })
  isProtected: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSlots" })
  maxSlots: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=remainingSize" })
  remainingSize?: number;

  @SpeakeasyMetadata({ data: "json, name=remainingSlots" })
  remainingSlots?: number;

  @SpeakeasyMetadata({ data: "json, name=showUploadedFiles" })
  showUploadedFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uploadedFiles", elemType: PublicUploadedFileData })
  uploadedFiles?: PublicUploadedFileData[];

  @SpeakeasyMetadata({ data: "json, name=userUserPublicKeyList" })
  userUserPublicKeyList?: UserUserPublicKeyListOutput;
}
