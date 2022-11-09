import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputSource
/** 
 * Information about the source where the association execution details are stored.
**/
export class OutputSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=OutputSourceId" })
  outputSourceId?: string;

  @Metadata({ data: "json, name=OutputSourceType" })
  outputSourceType?: string;
}
