import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEnableSnapshotCopyActionEnum {
    EnableSnapshotCopy = "EnableSnapshotCopy"
}

export enum GetEnableSnapshotCopyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetEnableSnapshotCopyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableSnapshotCopyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationRegion" })
  destinationRegion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ManualSnapshotRetentionPeriod" })
  manualSnapshotRetentionPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RetentionPeriod" })
  retentionPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotCopyGrantName" })
  snapshotCopyGrantName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableSnapshotCopyVersionEnum;
}


export class GetEnableSnapshotCopyHeaders extends SpeakeasyBase {
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


export class GetEnableSnapshotCopyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEnableSnapshotCopyQueryParams;

  @Metadata()
  headers: GetEnableSnapshotCopyHeaders;
}


export class GetEnableSnapshotCopyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
