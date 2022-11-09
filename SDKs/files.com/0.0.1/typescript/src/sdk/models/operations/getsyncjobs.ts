import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSyncJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetSyncJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSyncJobsQueryParams;
}


export class GetSyncJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SyncJobEntity })
  syncJobEntities?: shared.SyncJobEntity[];
}
