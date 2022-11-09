import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileKey } from "./filekey";
import { PrivateKeyContainer } from "./privatekeycontainer";


// PublicDownloadShare
/** 
 * Download Share information
**/
export class PublicDownloadShare extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=creatorName" })
  creatorName: string;

  @Metadata({ data: "json, name=creatorUsername" })
  creatorUsername?: string;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @Metadata({ data: "json, name=fileKey" })
  fileKey?: FileKey;

  @Metadata({ data: "json, name=fileName" })
  fileName: string;

  @Metadata({ data: "json, name=hasDownloadLimit" })
  hasDownloadLimit: boolean;

  @Metadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @Metadata({ data: "json, name=isProtected" })
  isProtected: boolean;

  @Metadata({ data: "json, name=limitReached" })
  limitReached: boolean;

  @Metadata({ data: "json, name=mediaType" })
  mediaType: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=privateKeyContainer" })
  privateKeyContainer?: PrivateKeyContainer;

  @Metadata({ data: "json, name=size" })
  size: number;
}
