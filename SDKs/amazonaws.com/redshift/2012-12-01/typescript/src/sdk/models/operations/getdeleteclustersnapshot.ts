import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteClusterSnapshotActionEnum {
    DeleteClusterSnapshot = "DeleteClusterSnapshot"
}

export enum GetDeleteClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteClusterSnapshotQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteClusterSnapshotActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotClusterIdentifier" })
  snapshotClusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" })
  snapshotIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteClusterSnapshotVersionEnum;
}


export class GetDeleteClusterSnapshotHeaders extends SpeakeasyBase {
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


export class GetDeleteClusterSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteClusterSnapshotQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteClusterSnapshotHeaders;
}


export class GetDeleteClusterSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
