import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyRange
/** 
 * Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.
**/
export class KeyRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=BeginMarker" })
  beginMarker?: string;

  @Metadata({ data: "json, name=EndMarker" })
  endMarker?: string;
}
