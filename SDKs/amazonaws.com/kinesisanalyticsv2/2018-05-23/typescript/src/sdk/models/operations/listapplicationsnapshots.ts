import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListApplicationSnapshotsXAmzTargetEnum {
    KinesisAnalytics20180523ListApplicationSnapshots = "KinesisAnalytics_20180523.ListApplicationSnapshots"
}


export class ListApplicationSnapshotsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListApplicationSnapshotsXAmzTargetEnum;
}


export class ListApplicationSnapshotsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListApplicationSnapshotsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListApplicationSnapshotsRequest;
}


export class ListApplicationSnapshotsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  listApplicationSnapshotsResponse?: shared.ListApplicationSnapshotsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
