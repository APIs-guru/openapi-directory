import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScheduledTasksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetScheduledTasksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetScheduledTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScheduledTasksPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScheduledTasksQueryParams;
}


export class GetScheduledTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ScheduledTask })
  scheduledTasks?: shared.ScheduledTask[];

  @SpeakeasyMetadata()
  statusCode: number;
}
