import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScheduledTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduledTaskId" })
  scheduledTaskId: string;
}


export class GetScheduledTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scheduled_task_id" })
  scheduledTaskId: string;
}


export class GetScheduledTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScheduledTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScheduledTaskQueryParams;
}


export class GetScheduledTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduledTask?: shared.ScheduledTask;

  @SpeakeasyMetadata()
  statusCode: number;
}
