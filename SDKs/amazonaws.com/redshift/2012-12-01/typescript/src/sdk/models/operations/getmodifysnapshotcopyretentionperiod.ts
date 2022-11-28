import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifySnapshotCopyRetentionPeriodActionEnum {
    ModifySnapshotCopyRetentionPeriod = "ModifySnapshotCopyRetentionPeriod"
}

export enum GetModifySnapshotCopyRetentionPeriodVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifySnapshotCopyRetentionPeriodQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifySnapshotCopyRetentionPeriodActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Manual" })
  manual?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RetentionPeriod" })
  retentionPeriod: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifySnapshotCopyRetentionPeriodVersionEnum;
}


export class GetModifySnapshotCopyRetentionPeriodHeaders extends SpeakeasyBase {
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


export class GetModifySnapshotCopyRetentionPeriodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifySnapshotCopyRetentionPeriodQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifySnapshotCopyRetentionPeriodHeaders;
}


export class GetModifySnapshotCopyRetentionPeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
