import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputSource
/** 
 * Information about the source where the association execution details are stored.
**/
export class OutputSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OutputSourceId" })
  outputSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputSourceType" })
  outputSourceType?: string;
}
