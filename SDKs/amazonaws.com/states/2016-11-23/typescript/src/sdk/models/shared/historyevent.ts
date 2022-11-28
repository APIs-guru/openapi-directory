import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=activityFailedEventDetails" })
  activityFailedEventDetails?: ActivityFailedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=activityScheduleFailedEventDetails" })
  activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=activityScheduledEventDetails" })
  activityScheduledEventDetails?: ActivityScheduledEventDetails;

  @SpeakeasyMetadata({ data: "json, name=activityStartedEventDetails" })
  activityStartedEventDetails?: ActivityStartedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=activitySucceededEventDetails" })
  activitySucceededEventDetails?: ActivitySucceededEventDetails;

  @SpeakeasyMetadata({ data: "json, name=activityTimedOutEventDetails" })
  activityTimedOutEventDetails?: ActivityTimedOutEventDetails;

  @SpeakeasyMetadata({ data: "json, name=executionAbortedEventDetails" })
  executionAbortedEventDetails?: ExecutionAbortedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=executionFailedEventDetails" })
  executionFailedEventDetails?: ExecutionFailedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=executionStartedEventDetails" })
  executionStartedEventDetails?: ExecutionStartedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=executionSucceededEventDetails" })
  executionSucceededEventDetails?: ExecutionSucceededEventDetails;

  @SpeakeasyMetadata({ data: "json, name=executionTimedOutEventDetails" })
  executionTimedOutEventDetails?: ExecutionTimedOutEventDetails;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionFailedEventDetails" })
  lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionScheduleFailedEventDetails" })
  lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionScheduledEventDetails" })
  lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionStartFailedEventDetails" })
  lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionSucceededEventDetails" })
  lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionTimedOutEventDetails" })
  lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails;

  @SpeakeasyMetadata({ data: "json, name=mapIterationAbortedEventDetails" })
  mapIterationAbortedEventDetails?: MapIterationEventDetails;

  @SpeakeasyMetadata({ data: "json, name=mapIterationFailedEventDetails" })
  mapIterationFailedEventDetails?: MapIterationEventDetails;

  @SpeakeasyMetadata({ data: "json, name=mapIterationStartedEventDetails" })
  mapIterationStartedEventDetails?: MapIterationEventDetails;

  @SpeakeasyMetadata({ data: "json, name=mapIterationSucceededEventDetails" })
  mapIterationSucceededEventDetails?: MapIterationEventDetails;

  @SpeakeasyMetadata({ data: "json, name=mapStateStartedEventDetails" })
  mapStateStartedEventDetails?: MapStateStartedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=previousEventId" })
  previousEventId?: number;

  @SpeakeasyMetadata({ data: "json, name=stateEnteredEventDetails" })
  stateEnteredEventDetails?: StateEnteredEventDetails;

  @SpeakeasyMetadata({ data: "json, name=stateExitedEventDetails" })
  stateExitedEventDetails?: StateExitedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=taskFailedEventDetails" })
  taskFailedEventDetails?: TaskFailedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=taskScheduledEventDetails" })
  taskScheduledEventDetails?: TaskScheduledEventDetails;

  @SpeakeasyMetadata({ data: "json, name=taskStartFailedEventDetails" })
  taskStartFailedEventDetails?: TaskStartFailedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=taskStartedEventDetails" })
  taskStartedEventDetails?: TaskStartedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=taskSubmitFailedEventDetails" })
  taskSubmitFailedEventDetails?: TaskSubmitFailedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=taskSubmittedEventDetails" })
  taskSubmittedEventDetails?: TaskSubmittedEventDetails;

  @SpeakeasyMetadata({ data: "json, name=taskSucceededEventDetails" })
  taskSucceededEventDetails?: TaskSucceededEventDetails;

  @SpeakeasyMetadata({ data: "json, name=taskTimedOutEventDetails" })
  taskTimedOutEventDetails?: TaskTimedOutEventDetails;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: HistoryEventTypeEnum;
}
