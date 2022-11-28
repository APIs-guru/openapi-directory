from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HistoryEvent:
    r"""HistoryEvent
    Contains details about the events of an execution.
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: HistoryEventTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    activity_failed_event_details: Optional[ActivityFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityFailedEventDetails') }})
    activity_schedule_failed_event_details: Optional[ActivityScheduleFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityScheduleFailedEventDetails') }})
    activity_scheduled_event_details: Optional[ActivityScheduledEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityScheduledEventDetails') }})
    activity_started_event_details: Optional[ActivityStartedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityStartedEventDetails') }})
    activity_succeeded_event_details: Optional[ActivitySucceededEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activitySucceededEventDetails') }})
    activity_timed_out_event_details: Optional[ActivityTimedOutEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityTimedOutEventDetails') }})
    execution_aborted_event_details: Optional[ExecutionAbortedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionAbortedEventDetails') }})
    execution_failed_event_details: Optional[ExecutionFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionFailedEventDetails') }})
    execution_started_event_details: Optional[ExecutionStartedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStartedEventDetails') }})
    execution_succeeded_event_details: Optional[ExecutionSucceededEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionSucceededEventDetails') }})
    execution_timed_out_event_details: Optional[ExecutionTimedOutEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTimedOutEventDetails') }})
    lambda_function_failed_event_details: Optional[LambdaFunctionFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionFailedEventDetails') }})
    lambda_function_schedule_failed_event_details: Optional[LambdaFunctionScheduleFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionScheduleFailedEventDetails') }})
    lambda_function_scheduled_event_details: Optional[LambdaFunctionScheduledEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionScheduledEventDetails') }})
    lambda_function_start_failed_event_details: Optional[LambdaFunctionStartFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionStartFailedEventDetails') }})
    lambda_function_succeeded_event_details: Optional[LambdaFunctionSucceededEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionSucceededEventDetails') }})
    lambda_function_timed_out_event_details: Optional[LambdaFunctionTimedOutEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionTimedOutEventDetails') }})
    map_iteration_aborted_event_details: Optional[MapIterationEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapIterationAbortedEventDetails') }})
    map_iteration_failed_event_details: Optional[MapIterationEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapIterationFailedEventDetails') }})
    map_iteration_started_event_details: Optional[MapIterationEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapIterationStartedEventDetails') }})
    map_iteration_succeeded_event_details: Optional[MapIterationEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapIterationSucceededEventDetails') }})
    map_state_started_event_details: Optional[MapStateStartedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapStateStartedEventDetails') }})
    previous_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousEventId') }})
    state_entered_event_details: Optional[StateEnteredEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateEnteredEventDetails') }})
    state_exited_event_details: Optional[StateExitedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateExitedEventDetails') }})
    task_failed_event_details: Optional[TaskFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskFailedEventDetails') }})
    task_scheduled_event_details: Optional[TaskScheduledEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskScheduledEventDetails') }})
    task_start_failed_event_details: Optional[TaskStartFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartFailedEventDetails') }})
    task_started_event_details: Optional[TaskStartedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartedEventDetails') }})
    task_submit_failed_event_details: Optional[TaskSubmitFailedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSubmitFailedEventDetails') }})
    task_submitted_event_details: Optional[TaskSubmittedEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSubmittedEventDetails') }})
    task_succeeded_event_details: Optional[TaskSucceededEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSucceededEventDetails') }})
    task_timed_out_event_details: Optional[TaskTimedOutEventDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskTimedOutEventDetails') }})
    
