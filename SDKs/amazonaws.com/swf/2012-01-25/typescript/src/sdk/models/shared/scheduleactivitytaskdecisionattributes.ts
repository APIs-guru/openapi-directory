import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityType } from "./activitytype";
import { TaskList } from "./tasklist";


// ScheduleActivityTaskDecisionAttributes
/** 
 * <p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
**/
export class ScheduleActivityTaskDecisionAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityId" })
  activityId: string;

  @Metadata({ data: "json, name=activityType" })
  activityType: ActivityType;

  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=heartbeatTimeout" })
  heartbeatTimeout?: string;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=scheduleToCloseTimeout" })
  scheduleToCloseTimeout?: string;

  @Metadata({ data: "json, name=scheduleToStartTimeout" })
  scheduleToStartTimeout?: string;

  @Metadata({ data: "json, name=startToCloseTimeout" })
  startToCloseTimeout?: string;

  @Metadata({ data: "json, name=taskList" })
  taskList?: TaskList;

  @Metadata({ data: "json, name=taskPriority" })
  taskPriority?: string;
}
