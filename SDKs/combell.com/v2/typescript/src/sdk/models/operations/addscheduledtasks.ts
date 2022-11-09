import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddScheduledTasksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class AddScheduledTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class AddScheduledTasksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddScheduledTasksPathParams;

  @Metadata()
  queryParams: AddScheduledTasksQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ScheduledTask;
}


export class AddScheduledTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
