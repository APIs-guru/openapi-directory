import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRestoreTableFromClusterSnapshotActionEnum {
    RestoreTableFromClusterSnapshot = "RestoreTableFromClusterSnapshot"
}

export enum GetRestoreTableFromClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetRestoreTableFromClusterSnapshotQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestoreTableFromClusterSnapshotActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnableCaseSensitiveIdentifier" })
  enableCaseSensitiveIdentifier?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewTableName" })
  newTableName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" })
  snapshotIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceDatabaseName" })
  sourceDatabaseName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceSchemaName" })
  sourceSchemaName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceTableName" })
  sourceTableName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetDatabaseName" })
  targetDatabaseName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetSchemaName" })
  targetSchemaName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestoreTableFromClusterSnapshotVersionEnum;
}


export class GetRestoreTableFromClusterSnapshotHeaders extends SpeakeasyBase {
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


export class GetRestoreTableFromClusterSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRestoreTableFromClusterSnapshotQueryParams;

  @Metadata()
  headers: GetRestoreTableFromClusterSnapshotHeaders;
}


export class GetRestoreTableFromClusterSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
