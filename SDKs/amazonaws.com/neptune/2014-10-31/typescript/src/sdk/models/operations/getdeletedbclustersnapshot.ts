import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteDbClusterSnapshotActionEnum {
    DeleteDbClusterSnapshot = "DeleteDBClusterSnapshot"
}

export enum GetDeleteDbClusterSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDeleteDbClusterSnapshotQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteDbClusterSnapshotActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterSnapshotIdentifier" })
  dbClusterSnapshotIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteDbClusterSnapshotVersionEnum;
}


export class GetDeleteDbClusterSnapshotHeaders extends SpeakeasyBase {
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


export class GetDeleteDbClusterSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteDbClusterSnapshotQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteDbClusterSnapshotHeaders;
}


export class GetDeleteDbClusterSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
