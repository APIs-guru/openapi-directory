import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRestoreTableFromClusterSnapshotActionEnum {
    RestoreTableFromClusterSnapshot = "RestoreTableFromClusterSnapshot"
}

export enum GetRestoreTableFromClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetRestoreTableFromClusterSnapshotQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestoreTableFromClusterSnapshotActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableCaseSensitiveIdentifier" })
  enableCaseSensitiveIdentifier?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewTableName" })
  newTableName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" })
  snapshotIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceDatabaseName" })
  sourceDatabaseName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceSchemaName" })
  sourceSchemaName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceTableName" })
  sourceTableName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetDatabaseName" })
  targetDatabaseName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetSchemaName" })
  targetSchemaName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestoreTableFromClusterSnapshotVersionEnum;
}


export class GetRestoreTableFromClusterSnapshotHeaders extends SpeakeasyBase {
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


export class GetRestoreTableFromClusterSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRestoreTableFromClusterSnapshotQueryParams;

  @SpeakeasyMetadata()
  headers: GetRestoreTableFromClusterSnapshotHeaders;
}


export class GetRestoreTableFromClusterSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
