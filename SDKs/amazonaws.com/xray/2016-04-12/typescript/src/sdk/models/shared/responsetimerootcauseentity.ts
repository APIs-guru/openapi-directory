import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResponseTimeRootCauseEntity
/** 
 * A collection of segments and corresponding subsegments associated to a response time warning.
**/
export class ResponseTimeRootCauseEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Coverage" })
  coverage?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Remote" })
  remote?: boolean;
}
