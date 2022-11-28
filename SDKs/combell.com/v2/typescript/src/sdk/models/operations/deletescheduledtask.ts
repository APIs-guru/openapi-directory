import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteScheduledTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduledTaskId" })
  scheduledTaskId: string;
}


export class DeleteScheduledTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scheduled_task_id" })
  scheduledTaskId: string;
}


export class DeleteScheduledTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteScheduledTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteScheduledTaskQueryParams;
}


export class DeleteScheduledTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
