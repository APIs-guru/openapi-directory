import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnigramStats
/** 
 * The statistics of a unigram.
**/
export class UnigramStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
