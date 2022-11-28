import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamRecord } from "./streamrecord";
import { OperationTypeEnum } from "./operationtypeenum";
import { Identity } from "./identity";



// Record
/** 
 * A description of a unique event within a stream.
**/
export class Record extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamodb" })
  dynamodb?: StreamRecord;

  @SpeakeasyMetadata({ data: "json, name=eventID" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName?: OperationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=eventSource" })
  eventSource?: string;

  @SpeakeasyMetadata({ data: "json, name=eventVersion" })
  eventVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=userIdentity" })
  userIdentity?: Identity;
}
