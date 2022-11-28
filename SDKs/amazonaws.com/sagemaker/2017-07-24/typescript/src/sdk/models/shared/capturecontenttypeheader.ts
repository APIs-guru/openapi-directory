import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CaptureContentTypeHeader
/** 
 * <p/>
**/
export class CaptureContentTypeHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CsvContentTypes" })
  csvContentTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=JsonContentTypes" })
  jsonContentTypes?: string[];
}
