import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
import { PrivateKeyContainerOutput } from "./privatekeycontainer";



// PublicDownloadShareOutput
/** 
 * Download Share information
**/
export class PublicDownloadShareOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=creatorName" })
  creatorName: string;

  @SpeakeasyMetadata({ data: "json, name=creatorUsername" })
  creatorUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=fileKey" })
  fileKey?: FileKey;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName: string;

  @SpeakeasyMetadata({ data: "json, name=hasDownloadLimit" })
  hasDownloadLimit: boolean;

  @SpeakeasyMetadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isProtected" })
  isProtected: boolean;

  @SpeakeasyMetadata({ data: "json, name=limitReached" })
  limitReached: boolean;

  @SpeakeasyMetadata({ data: "json, name=mediaType" })
  mediaType: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=privateKeyContainer" })
  privateKeyContainer?: PrivateKeyContainerOutput;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}
