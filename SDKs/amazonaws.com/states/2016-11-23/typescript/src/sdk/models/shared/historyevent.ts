import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityFailedEventDetails } from "./activityfailedeventdetails";
import { ActivityScheduleFailedEventDetails } from "./activityschedulefailedeventdetails";
import { ActivityScheduledEventDetails } from "./activityscheduledeventdetails";
import { ActivityStartedEventDetails } from "./activitystartedeventdetails";
import { ActivitySucceededEventDetails } from "./activitysucceededeventdetails";
import { ActivityTimedOutEventDetails } from "./activitytimedouteventdetails";
import { ExecutionAbortedEventDetails } from "./executionabortedeventdetails";
import { ExecutionFailedEventDetails } from "./executionfailedeventdetails";
import { ExecutionStartedEventDetails } from "./executionstartedeventdetails";
import { ExecutionSucceededEventDetails } from "./executionsucceededeventdetails";
import { ExecutionTimedOutEventDetails } from "./executiontimedouteventdetails";
import { LambdaFunctionFailedEventDetails } from "./lambdafunctionfailedeventdetails";
import { LambdaFunctionScheduleFailedEventDetails } from "./lambdafunctionschedulefailedeventdetails";
import { LambdaFunctionScheduledEventDetails } from "./lambdafunctionscheduledeventdetails";
import { LambdaFunctionStartFailedEventDetails } from "./lambdafunctionstartfailedeventdetails";
import { LambdaFunctionSucceededEventDetails } from "./lambdafunctionsucceededeventdetails";
import { LambdaFunctionTimedOutEventDetails } from "./lambdafunctiontimedouteventdetails";
import { MapIterationEventDetails } from "./mapiterationeventdetails";
import { MapIterationEventDetails } from "./mapiterationeventdetails";
import { MapIterationEventDetails } from "./mapiterationeventdetails";
import { MapIterationEventDetails } from "./mapiterationeventdetails";
import { MapStateStartedEventDetails } from "./mapstatestartedeventdetails";
import { StateEnteredEventDetails } from "./stateenteredeventdetails";
import { StateExitedEventDetails } from "./stateexitedeventdetails";
import { TaskFailedEventDetails } from "./taskfailedeventdetails";
import { TaskScheduledEventDetails } from "./taskscheduledeventdetails";
import { TaskStartFailedEventDetails } from "./taskstartfailedeventdetails";
import { TaskStartedEventDetails } from "./taskstartedeventdetails";
import { TaskSubmitFailedEventDetails } from "./tasksubmitfailedeventdetails";
import { TaskSubmittedEventDetails } from "./tasksubmittedeventdetails";
import { TaskSucceededEventDetails } from "./tasksucceededeventdetails";
import { TaskTimedOutEventDetails } from "./tasktimedouteventdetails";
import { HistoryEventTypeEnum } from "./historyeventtypeenum";


// HistoryEvent
/** 
 * Contains details about the events of an execution.
**/
export class HistoryEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityFailedEventDetails" })
  activityFailedEventDetails?: ActivityFailedEventDetails;

  @Metadata({ data: "json, name=activityScheduleFailedEventDetails" })
  activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails;

  @Metadata({ data: "json, name=activityScheduledEventDetails" })
  activityScheduledEventDetails?: ActivityScheduledEventDetails;

  @Metadata({ data: "json, name=activityStartedEventDetails" })
  activityStartedEventDetails?: ActivityStartedEventDetails;

  @Metadata({ data: "json, name=activitySucceededEventDetails" })
  activitySucceededEventDetails?: ActivitySucceededEventDetails;

  @Metadata({ data: "json, name=activityTimedOutEventDetails" })
  activityTimedOutEventDetails?: ActivityTimedOutEventDetails;

  @Metadata({ data: "json, name=executionAbortedEventDetails" })
  executionAbortedEventDetails?: ExecutionAbortedEventDetails;

  @Metadata({ data: "json, name=executionFailedEventDetails" })
  executionFailedEventDetails?: ExecutionFailedEventDetails;

  @Metadata({ data: "json, name=executionStartedEventDetails" })
  executionStartedEventDetails?: ExecutionStartedEventDetails;

  @Metadata({ data: "json, name=executionSucceededEventDetails" })
  executionSucceededEventDetails?: ExecutionSucceededEventDetails;

  @Metadata({ data: "json, name=executionTimedOutEventDetails" })
  executionTimedOutEventDetails?: ExecutionTimedOutEventDetails;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=lambdaFunctionFailedEventDetails" })
  lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails;

  @Metadata({ data: "json, name=lambdaFunctionScheduleFailedEventDetails" })
  lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails;

  @Metadata({ data: "json, name=lambdaFunctionScheduledEventDetails" })
  lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails;

  @Metadata({ data: "json, name=lambdaFunctionStartFailedEventDetails" })
  lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails;

  @Metadata({ data: "json, name=lambdaFunctionSucceededEventDetails" })
  lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails;

  @Metadata({ data: "json, name=lambdaFunctionTimedOutEventDetails" })
  lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails;

  @Metadata({ data: "json, name=mapIterationAbortedEventDetails" })
  mapIterationAbortedEventDetails?: MapIterationEventDetails;

  @Metadata({ data: "json, name=mapIterationFailedEventDetails" })
  mapIterationFailedEventDetails?: MapIterationEventDetails;

  @Metadata({ data: "json, name=mapIterationStartedEventDetails" })
  mapIterationStartedEventDetails?: MapIterationEventDetails;

  @Metadata({ data: "json, name=mapIterationSucceededEventDetails" })
  mapIterationSucceededEventDetails?: MapIterationEventDetails;

  @Metadata({ data: "json, name=mapStateStartedEventDetails" })
  mapStateStartedEventDetails?: MapStateStartedEventDetails;

  @Metadata({ data: "json, name=previousEventId" })
  previousEventId?: number;

  @Metadata({ data: "json, name=stateEnteredEventDetails" })
  stateEnteredEventDetails?: StateEnteredEventDetails;

  @Metadata({ data: "json, name=stateExitedEventDetails" })
  stateExitedEventDetails?: StateExitedEventDetails;

  @Metadata({ data: "json, name=taskFailedEventDetails" })
  taskFailedEventDetails?: TaskFailedEventDetails;

  @Metadata({ data: "json, name=taskScheduledEventDetails" })
  taskScheduledEventDetails?: TaskScheduledEventDetails;

  @Metadata({ data: "json, name=taskStartFailedEventDetails" })
  taskStartFailedEventDetails?: TaskStartFailedEventDetails;

  @Metadata({ data: "json, name=taskStartedEventDetails" })
  taskStartedEventDetails?: TaskStartedEventDetails;

  @Metadata({ data: "json, name=taskSubmitFailedEventDetails" })
  taskSubmitFailedEventDetails?: TaskSubmitFailedEventDetails;

  @Metadata({ data: "json, name=taskSubmittedEventDetails" })
  taskSubmittedEventDetails?: TaskSubmittedEventDetails;

  @Metadata({ data: "json, name=taskSucceededEventDetails" })
  taskSucceededEventDetails?: TaskSucceededEventDetails;

  @Metadata({ data: "json, name=taskTimedOutEventDetails" })
  taskTimedOutEventDetails?: TaskTimedOutEventDetails;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=type" })
  type: HistoryEventTypeEnum;
}
