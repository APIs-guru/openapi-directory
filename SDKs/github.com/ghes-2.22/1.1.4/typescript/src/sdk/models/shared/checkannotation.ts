import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CheckAnnotation
/** 
 * Check Annotation
**/
export class CheckAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotation_level" })
  annotationLevel: string;

  @Metadata({ data: "json, name=blob_href" })
  blobHref: string;

  @Metadata({ data: "json, name=end_column" })
  endColumn: number;

  @Metadata({ data: "json, name=end_line" })
  endLine: number;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=raw_details" })
  rawDetails: string;

  @Metadata({ data: "json, name=start_column" })
  startColumn: number;

  @Metadata({ data: "json, name=start_line" })
  startLine: number;

  @Metadata({ data: "json, name=title" })
  title: string;
}
