import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Gcs
/** 
 * Represents a Google Cloud Storage volume.
**/
export class Gcs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=remotePath" })
  remotePath?: string;
}
