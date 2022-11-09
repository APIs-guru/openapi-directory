import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteClusterSnapshotActionEnum {
    DeleteClusterSnapshot = "DeleteClusterSnapshot"
}

export enum GetDeleteClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteClusterSnapshotQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteClusterSnapshotActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotClusterIdentifier" })
  snapshotClusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" })
  snapshotIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteClusterSnapshotVersionEnum;
}


export class GetDeleteClusterSnapshotHeaders extends SpeakeasyBase {
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


export class GetDeleteClusterSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteClusterSnapshotQueryParams;

  @Metadata()
  headers: GetDeleteClusterSnapshotHeaders;
}


export class GetDeleteClusterSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
