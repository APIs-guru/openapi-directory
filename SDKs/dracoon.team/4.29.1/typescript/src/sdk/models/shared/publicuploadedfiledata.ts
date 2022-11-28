import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicUploadedFileData
/** 
 * File information
**/
export class PublicUploadedFileData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}
