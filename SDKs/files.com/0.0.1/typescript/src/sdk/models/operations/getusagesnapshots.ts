import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsageSnapshotsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetUsageSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUsageSnapshotsQueryParams;
}


export class GetUsageSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UsageSnapshotEntity })
  usageSnapshotEntities?: shared.UsageSnapshotEntity[];
}
