import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureScheduledTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scheduledTaskId" })
  scheduledTaskId: string;
}


export class ConfigureScheduledTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scheduled_task_id" })
  scheduledTaskId: string;
}


export class ConfigureScheduledTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureScheduledTaskPathParams;

  @Metadata()
  queryParams: ConfigureScheduledTaskQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ScheduledTask;
}


export class ConfigureScheduledTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
