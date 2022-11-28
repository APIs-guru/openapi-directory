import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedParameter } from "./nestedparameter";



// ActivityActor
/** 
 * User doing the action.
**/
export class ActivityActor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callerType" })
  callerType?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: string;
}


// ActivityEventsParametersMessageValue
/** 
 * Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`
**/
export class ActivityEventsParametersMessageValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter", elemType: NestedParameter })
  parameter?: NestedParameter[];
}


export class ActivityEventsParametersMultiMessageValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter", elemType: NestedParameter })
  parameter?: NestedParameter[];
}


export class ActivityEventsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=messageValue" })
  messageValue?: ActivityEventsParametersMessageValue;

  @SpeakeasyMetadata({ data: "json, name=multiIntValue" })
  multiIntValue?: string[];

  @SpeakeasyMetadata({ data: "json, name=multiMessageValue", elemType: ActivityEventsParametersMultiMessageValue })
  multiMessageValue?: ActivityEventsParametersMultiMessageValue[];

  @SpeakeasyMetadata({ data: "json, name=multiValue" })
  multiValue?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ActivityEvents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: ActivityEventsParameters })
  parameters?: ActivityEventsParameters[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// ActivityId
/** 
 * Unique identifier for each activity record.
**/
export class ActivityId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;

  @SpeakeasyMetadata({ data: "json, name=uniqueQualifier" })
  uniqueQualifier?: string;
}


// Activity
/** 
 * JSON template for the activity resource.
**/
export class Activity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor?: ActivityActor;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: ActivityEvents })
  events?: ActivityEvents[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: ActivityId;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerDomain" })
  ownerDomain?: string;
}
