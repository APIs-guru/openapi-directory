import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckAnnotation
/** 
 * Check Annotation
**/
export class CheckAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotation_level" })
  annotationLevel: string;

  @SpeakeasyMetadata({ data: "json, name=blob_href" })
  blobHref: string;

  @SpeakeasyMetadata({ data: "json, name=end_column" })
  endColumn: number;

  @SpeakeasyMetadata({ data: "json, name=end_line" })
  endLine: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=raw_details" })
  rawDetails: string;

  @SpeakeasyMetadata({ data: "json, name=start_column" })
  startColumn: number;

  @SpeakeasyMetadata({ data: "json, name=start_line" })
  startLine: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
