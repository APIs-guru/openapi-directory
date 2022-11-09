import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublicUploadedFileData
/** 
 * File information
**/
export class PublicUploadedFileData extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=size" })
  size: number;
}
