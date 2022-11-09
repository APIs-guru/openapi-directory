import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CaptureContentTypeHeader
/** 
 * <p/>
**/
export class CaptureContentTypeHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=CsvContentTypes" })
  csvContentTypes?: string[];

  @Metadata({ data: "json, name=JsonContentTypes" })
  jsonContentTypes?: string[];
}
