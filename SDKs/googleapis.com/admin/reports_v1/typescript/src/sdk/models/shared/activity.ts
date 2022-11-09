import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NestedParameter } from "./nestedparameter";
import { NestedParameter } from "./nestedparameter";


// ActivityActor
/** 
 * User doing the action.
**/
export class ActivityActor extends SpeakeasyBase {
  @Metadata({ data: "json, name=callerType" })
  callerType?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=profileId" })
  profileId?: string;
}


// ActivityEventsParametersMessageValue
/** 
 * Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`
**/
export class ActivityEventsParametersMessageValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameter", elemType: shared.NestedParameter })
  parameter?: NestedParameter[];
}


export class ActivityEventsParametersMultiMessageValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameter", elemType: shared.NestedParameter })
  parameter?: NestedParameter[];
}


export class ActivityEventsParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=intValue" })
  intValue?: string;

  @Metadata({ data: "json, name=messageValue" })
  messageValue?: ActivityEventsParametersMessageValue;

  @Metadata({ data: "json, name=multiIntValue" })
  multiIntValue?: string[];

  @Metadata({ data: "json, name=multiMessageValue", elemType: shared.ActivityEventsParametersMultiMessageValue })
  multiMessageValue?: ActivityEventsParametersMultiMessageValue[];

  @Metadata({ data: "json, name=multiValue" })
  multiValue?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ActivityEvents extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.ActivityEventsParameters })
  parameters?: ActivityEventsParameters[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// ActivityId
/** 
 * Unique identifier for each activity record.
**/
export class ActivityId extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=time" })
  time?: Date;

  @Metadata({ data: "json, name=uniqueQualifier" })
  uniqueQualifier?: string;
}


// Activity
/** 
 * JSON template for the activity resource.
**/
export class Activity extends SpeakeasyBase {
  @Metadata({ data: "json, name=actor" })
  actor?: ActivityActor;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=events", elemType: shared.ActivityEvents })
  events?: ActivityEvents[];

  @Metadata({ data: "json, name=id" })
  id?: ActivityId;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=ownerDomain" })
  ownerDomain?: string;
}
