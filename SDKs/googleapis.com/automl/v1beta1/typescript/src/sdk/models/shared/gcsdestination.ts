import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcsDestination
/** 
 * The Google Cloud Storage location where the output is to be written to.
**/
export class GcsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputUriPrefix" })
  outputUriPrefix?: string;
}
