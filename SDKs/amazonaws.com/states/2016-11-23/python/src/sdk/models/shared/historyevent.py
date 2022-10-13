from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import activityfailedeventdetails
from . import activityschedulefailedeventdetails
from . import activityscheduledeventdetails
from . import activitystartedeventdetails
from . import activitysucceededeventdetails
from . import activitytimedouteventdetails
from . import executionabortedeventdetails
from . import executionfailedeventdetails
from . import executionstartedeventdetails
from . import executionsucceededeventdetails
from . import executiontimedouteventdetails
from . import lambdafunctionfailedeventdetails
from . import lambdafunctionschedulefailedeventdetails
from . import lambdafunctionscheduledeventdetails
from . import lambdafunctionstartfailedeventdetails
from . import lambdafunctionsucceededeventdetails
from . import lambdafunctiontimedouteventdetails
from . import mapiterationeventdetails
from . import mapiterationeventdetails
from . import mapiterationeventdetails
from . import mapiterationeventdetails
from . import mapstatestartedeventdetails
from . import stateenteredeventdetails
from . import stateexitedeventdetails
from . import taskfailedeventdetails
from . import taskscheduledeventdetails
from . import taskstartfailedeventdetails
from . import taskstartedeventdetails
from . import tasksubmitfailedeventdetails
from . import tasksubmittedeventdetails
from . import tasksucceededeventdetails
from . import tasktimedouteventdetails
from . import historyeventtype_enum


@dataclass_json
@dataclass
class HistoryEvent:
    activity_failed_event_details: Optional[activityfailedeventdetails.ActivityFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityFailedEventDetails' }})
    activity_schedule_failed_event_details: Optional[activityschedulefailedeventdetails.ActivityScheduleFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityScheduleFailedEventDetails' }})
    activity_scheduled_event_details: Optional[activityscheduledeventdetails.ActivityScheduledEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityScheduledEventDetails' }})
    activity_started_event_details: Optional[activitystartedeventdetails.ActivityStartedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityStartedEventDetails' }})
    activity_succeeded_event_details: Optional[activitysucceededeventdetails.ActivitySucceededEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activitySucceededEventDetails' }})
    activity_timed_out_event_details: Optional[activitytimedouteventdetails.ActivityTimedOutEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityTimedOutEventDetails' }})
    execution_aborted_event_details: Optional[executionabortedeventdetails.ExecutionAbortedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionAbortedEventDetails' }})
    execution_failed_event_details: Optional[executionfailedeventdetails.ExecutionFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionFailedEventDetails' }})
    execution_started_event_details: Optional[executionstartedeventdetails.ExecutionStartedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStartedEventDetails' }})
    execution_succeeded_event_details: Optional[executionsucceededeventdetails.ExecutionSucceededEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionSucceededEventDetails' }})
    execution_timed_out_event_details: Optional[executiontimedouteventdetails.ExecutionTimedOutEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionTimedOutEventDetails' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lambda_function_failed_event_details: Optional[lambdafunctionfailedeventdetails.LambdaFunctionFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionFailedEventDetails' }})
    lambda_function_schedule_failed_event_details: Optional[lambdafunctionschedulefailedeventdetails.LambdaFunctionScheduleFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionScheduleFailedEventDetails' }})
    lambda_function_scheduled_event_details: Optional[lambdafunctionscheduledeventdetails.LambdaFunctionScheduledEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionScheduledEventDetails' }})
    lambda_function_start_failed_event_details: Optional[lambdafunctionstartfailedeventdetails.LambdaFunctionStartFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionStartFailedEventDetails' }})
    lambda_function_succeeded_event_details: Optional[lambdafunctionsucceededeventdetails.LambdaFunctionSucceededEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionSucceededEventDetails' }})
    lambda_function_timed_out_event_details: Optional[lambdafunctiontimedouteventdetails.LambdaFunctionTimedOutEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionTimedOutEventDetails' }})
    map_iteration_aborted_event_details: Optional[mapiterationeventdetails.MapIterationEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapIterationAbortedEventDetails' }})
    map_iteration_failed_event_details: Optional[mapiterationeventdetails.MapIterationEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapIterationFailedEventDetails' }})
    map_iteration_started_event_details: Optional[mapiterationeventdetails.MapIterationEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapIterationStartedEventDetails' }})
    map_iteration_succeeded_event_details: Optional[mapiterationeventdetails.MapIterationEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapIterationSucceededEventDetails' }})
    map_state_started_event_details: Optional[mapstatestartedeventdetails.MapStateStartedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapStateStartedEventDetails' }})
    previous_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousEventId' }})
    state_entered_event_details: Optional[stateenteredeventdetails.StateEnteredEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateEnteredEventDetails' }})
    state_exited_event_details: Optional[stateexitedeventdetails.StateExitedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateExitedEventDetails' }})
    task_failed_event_details: Optional[taskfailedeventdetails.TaskFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskFailedEventDetails' }})
    task_scheduled_event_details: Optional[taskscheduledeventdetails.TaskScheduledEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskScheduledEventDetails' }})
    task_start_failed_event_details: Optional[taskstartfailedeventdetails.TaskStartFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStartFailedEventDetails' }})
    task_started_event_details: Optional[taskstartedeventdetails.TaskStartedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStartedEventDetails' }})
    task_submit_failed_event_details: Optional[tasksubmitfailedeventdetails.TaskSubmitFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSubmitFailedEventDetails' }})
    task_submitted_event_details: Optional[tasksubmittedeventdetails.TaskSubmittedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSubmittedEventDetails' }})
    task_succeeded_event_details: Optional[tasksucceededeventdetails.TaskSucceededEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSucceededEventDetails' }})
    task_timed_out_event_details: Optional[tasktimedouteventdetails.TaskTimedOutEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskTimedOutEventDetails' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: historyeventtype_enum.HistoryEventTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
