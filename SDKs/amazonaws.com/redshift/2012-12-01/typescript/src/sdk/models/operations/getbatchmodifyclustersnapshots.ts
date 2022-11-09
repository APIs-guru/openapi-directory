import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetBatchModifyClusterSnapshotsActionEnum {
    BatchModifyClusterSnapshots = "BatchModifyClusterSnapshots"
}

export enum GetBatchModifyClusterSnapshotsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetBatchModifyClusterSnapshotsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetBatchModifyClusterSnapshotsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Force" })
  force?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ManualSnapshotRetentionPeriod" })
  manualSnapshotRetentionPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifierList" })
  snapshotIdentifierList: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetBatchModifyClusterSnapshotsVersionEnum;
}


export class GetBatchModifyClusterSnapshotsHeaders extends SpeakeasyBase {
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
}


export class GetBatchModifyClusterSnapshotsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBatchModifyClusterSnapshotsQueryParams;

  @Metadata()
  headers: GetBatchModifyClusterSnapshotsHeaders;
}


export class GetBatchModifyClusterSnapshotsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
