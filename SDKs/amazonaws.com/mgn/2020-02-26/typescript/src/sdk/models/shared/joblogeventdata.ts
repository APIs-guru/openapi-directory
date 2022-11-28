import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobLogEventData
/** 
 * Job log data
**/
export class JobLogEventData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversionServerID" })
  conversionServerId?: string;

  @SpeakeasyMetadata({ data: "json, name=rawError" })
  rawError?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceServerID" })
  sourceServerId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetInstanceID" })
  targetInstanceId?: string;
}
