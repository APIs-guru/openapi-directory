import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobLogEventData
/** 
 * Job log data
**/
export class JobLogEventData extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversionServerID" })
  conversionServerId?: string;

  @Metadata({ data: "json, name=rawError" })
  rawError?: string;

  @Metadata({ data: "json, name=sourceServerID" })
  sourceServerId?: string;

  @Metadata({ data: "json, name=targetInstanceID" })
  targetInstanceId?: string;
}
