import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3FileUploadPart
/** 
 * S3 file upload part information
**/
export class S3FileUploadPart extends SpeakeasyBase {
  @Metadata({ data: "json, name=partEtag" })
  partEtag: string;

  @Metadata({ data: "json, name=partNumber" })
  partNumber: number;
}
