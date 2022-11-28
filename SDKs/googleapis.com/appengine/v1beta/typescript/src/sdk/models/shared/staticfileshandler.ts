import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StaticFilesHandler
/** 
 * Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.
**/
export class StaticFilesHandler extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationReadable" })
  applicationReadable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: string;

  @SpeakeasyMetadata({ data: "json, name=httpHeaders" })
  httpHeaders?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=requireMatchingFile" })
  requireMatchingFile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uploadPathRegex" })
  uploadPathRegex?: string;
}
