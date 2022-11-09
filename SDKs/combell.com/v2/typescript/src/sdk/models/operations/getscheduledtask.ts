import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScheduledTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scheduledTaskId" })
  scheduledTaskId: string;
}


export class GetScheduledTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scheduled_task_id" })
  scheduledTaskId: string;
}


export class GetScheduledTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScheduledTaskPathParams;

  @Metadata()
  queryParams: GetScheduledTaskQueryParams;
}


export class GetScheduledTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduledTask?: shared.ScheduledTask;

  @Metadata()
  statusCode: number;
}
