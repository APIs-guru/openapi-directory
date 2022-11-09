import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsageSnapshotsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetUsageSnapshotsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUsageSnapshotsQueryParams;
}


export class GetUsageSnapshotsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UsageSnapshotEntity })
  usageSnapshotEntities?: shared.UsageSnapshotEntity[];
}
