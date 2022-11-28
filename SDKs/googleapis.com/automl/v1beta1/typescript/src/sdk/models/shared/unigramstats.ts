import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnigramStats
/** 
 * The statistics of a unigram.
**/
export class UnigramStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
