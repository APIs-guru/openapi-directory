import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileInfo
/** 
 * Single source file that is part of the version to be deployed. Each source file that is deployed must be specified separately.
**/
export class FileInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=sha1Sum" })
  sha1Sum?: string;

  @Metadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;
}
