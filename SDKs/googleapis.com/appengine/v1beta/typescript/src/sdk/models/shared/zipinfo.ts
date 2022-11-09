import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ZipInfo
/** 
 * The zip file information for a zip deployment.
**/
export class ZipInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=filesCount" })
  filesCount?: number;

  @Metadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;
}
