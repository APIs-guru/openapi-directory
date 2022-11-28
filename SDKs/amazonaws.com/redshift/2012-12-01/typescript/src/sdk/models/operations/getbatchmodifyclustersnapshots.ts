import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetBatchModifyClusterSnapshotsActionEnum {
    BatchModifyClusterSnapshots = "BatchModifyClusterSnapshots"
}

export enum GetBatchModifyClusterSnapshotsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetBatchModifyClusterSnapshotsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetBatchModifyClusterSnapshotsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ManualSnapshotRetentionPeriod" })
  manualSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifierList" })
  snapshotIdentifierList: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetBatchModifyClusterSnapshotsVersionEnum;
}


export class GetBatchModifyClusterSnapshotsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetBatchModifyClusterSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchModifyClusterSnapshotsQueryParams;

  @SpeakeasyMetadata()
  headers: GetBatchModifyClusterSnapshotsHeaders;
}


export class GetBatchModifyClusterSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
