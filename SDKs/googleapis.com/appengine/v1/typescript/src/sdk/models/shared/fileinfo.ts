import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileInfo
/** 
 * Single source file that is part of the version to be deployed. Each source file that is deployed must be specified separately.
**/
export class FileInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=sha1Sum" })
  sha1Sum?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;
}
