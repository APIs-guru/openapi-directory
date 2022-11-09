import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResponseTimeRootCauseEntity
/** 
 * A collection of segments and corresponding subsegments associated to a response time warning.
**/
export class ResponseTimeRootCauseEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Coverage" })
  coverage?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Remote" })
  remote?: boolean;
}
