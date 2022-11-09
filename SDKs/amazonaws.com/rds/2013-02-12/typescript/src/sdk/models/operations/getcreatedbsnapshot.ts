import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateDbSnapshotActionEnum {
    CreateDbSnapshot = "CreateDBSnapshot"
}

export enum GetCreateDbSnapshotVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetCreateDbSnapshotQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateDbSnapshotActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSnapshotIdentifier" })
  dbSnapshotIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateDbSnapshotVersionEnum;
}


export class GetCreateDbSnapshotHeaders extends SpeakeasyBase {
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


export class GetCreateDbSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateDbSnapshotQueryParams;

  @Metadata()
  headers: GetCreateDbSnapshotHeaders;
}


export class GetCreateDbSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
