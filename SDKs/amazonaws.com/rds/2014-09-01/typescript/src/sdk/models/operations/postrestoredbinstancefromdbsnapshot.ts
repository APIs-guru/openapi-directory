import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostRestoreDbInstanceFromDbSnapshotActionEnum {
    RestoreDbInstanceFromDbSnapshot = "RestoreDBInstanceFromDBSnapshot"
}

export enum PostRestoreDbInstanceFromDbSnapshotVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}


export class PostRestoreDbInstanceFromDbSnapshotQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRestoreDbInstanceFromDbSnapshotActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRestoreDbInstanceFromDbSnapshotVersionEnum;
}


export class PostRestoreDbInstanceFromDbSnapshotHeaders extends SpeakeasyBase {
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


export class PostRestoreDbInstanceFromDbSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostRestoreDbInstanceFromDbSnapshotQueryParams;

  @Metadata()
  headers: PostRestoreDbInstanceFromDbSnapshotHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRestoreDbInstanceFromDbSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
