import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamRecord } from "./streamrecord";
import { OperationTypeEnum } from "./operationtypeenum";
import { Identity } from "./identity";


// Record
/** 
 * A description of a unique event within a stream.
**/
export class Record extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @Metadata({ data: "json, name=dynamodb" })
  dynamodb?: StreamRecord;

  @Metadata({ data: "json, name=eventID" })
  eventId?: string;

  @Metadata({ data: "json, name=eventName" })
  eventName?: OperationTypeEnum;

  @Metadata({ data: "json, name=eventSource" })
  eventSource?: string;

  @Metadata({ data: "json, name=eventVersion" })
  eventVersion?: string;

  @Metadata({ data: "json, name=userIdentity" })
  userIdentity?: Identity;
}
