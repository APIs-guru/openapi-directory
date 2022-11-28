import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3FileUploadPart
/** 
 * S3 file upload part information
**/
export class S3FileUploadPart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partEtag" })
  partEtag: string;

  @SpeakeasyMetadata({ data: "json, name=partNumber" })
  partNumber: number;
}
