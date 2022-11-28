import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ZipInfo
/** 
 * The zip file information for a zip deployment.
**/
export class ZipInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filesCount" })
  filesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;
}
