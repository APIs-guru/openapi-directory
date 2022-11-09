import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScheduledTasksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetScheduledTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetScheduledTasksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScheduledTasksPathParams;

  @Metadata()
  queryParams: GetScheduledTasksQueryParams;
}


export class GetScheduledTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ScheduledTask })
  scheduledTasks?: shared.ScheduledTask[];

  @Metadata()
  statusCode: number;
}
