import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExternalData
/** 
 * Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash.
**/
export class ExternalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha256Hash" })
  sha256Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
