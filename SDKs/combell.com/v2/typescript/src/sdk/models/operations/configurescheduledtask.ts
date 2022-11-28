import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureScheduledTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduledTaskId" })
  scheduledTaskId: string;
}


export class ConfigureScheduledTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scheduled_task_id" })
  scheduledTaskId: string;
}


export class ConfigureScheduledTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureScheduledTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: ConfigureScheduledTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ScheduledTask;
}


export class ConfigureScheduledTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
