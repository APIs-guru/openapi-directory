import { SpeakeasyBase } from "../../../internal/utils";
import { NestedParameter } from "./nestedparameter";
/**
 * User doing the action.
**/
export declare class ActivityActor extends SpeakeasyBase {
    callerType?: string;
    email?: string;
    key?: string;
    profileId?: string;
}
/**
 * Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`
**/
export declare class ActivityEventsParametersMessageValue extends SpeakeasyBase {
    parameter?: NestedParameter[];
}
export declare class ActivityEventsParametersMultiMessageValue extends SpeakeasyBase {
    parameter?: NestedParameter[];
}
export declare class ActivityEventsParameters extends SpeakeasyBase {
    boolValue?: boolean;
    intValue?: string;
    messageValue?: ActivityEventsParametersMessageValue;
    multiIntValue?: string[];
    multiMessageValue?: ActivityEventsParametersMultiMessageValue[];
    multiValue?: string[];
    name?: string;
    value?: string;
}
export declare class ActivityEvents extends SpeakeasyBase {
    name?: string;
    parameters?: ActivityEventsParameters[];
    type?: string;
}
/**
 * Unique identifier for each activity record.
**/
export declare class ActivityId extends SpeakeasyBase {
    applicationName?: string;
    customerId?: string;
    time?: Date;
    uniqueQualifier?: string;
}
/**
 * JSON template for the activity resource.
**/
export declare class Activity extends SpeakeasyBase {
    actor?: ActivityActor;
    etag?: string;
    events?: ActivityEvents[];
    id?: ActivityId;
    ipAddress?: string;
    kind?: string;
    ownerDomain?: string;
}
