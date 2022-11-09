import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StaticFilesHandler
/** 
 * Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.
**/
export class StaticFilesHandler extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationReadable" })
  applicationReadable?: boolean;

  @Metadata({ data: "json, name=expiration" })
  expiration?: string;

  @Metadata({ data: "json, name=httpHeaders" })
  httpHeaders?: Map<string, string>;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=requireMatchingFile" })
  requireMatchingFile?: boolean;

  @Metadata({ data: "json, name=uploadPathRegex" })
  uploadPathRegex?: string;
}
