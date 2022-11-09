import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteScheduledTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scheduledTaskId" })
  scheduledTaskId: string;
}


export class DeleteScheduledTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scheduled_task_id" })
  scheduledTaskId: string;
}


export class DeleteScheduledTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteScheduledTaskPathParams;

  @Metadata()
  queryParams: DeleteScheduledTaskQueryParams;
}


export class DeleteScheduledTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
