import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExternalData
/** 
 * Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash.
**/
export class ExternalData extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha256Hash" })
  sha256Hash?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
