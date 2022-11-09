import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRevokeSnapshotAccessActionEnum {
    RevokeSnapshotAccess = "RevokeSnapshotAccess"
}

export enum GetRevokeSnapshotAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetRevokeSnapshotAccessQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccountWithRestoreAccess" })
  accountWithRestoreAccess: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRevokeSnapshotAccessActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotClusterIdentifier" })
  snapshotClusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" })
  snapshotIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRevokeSnapshotAccessVersionEnum;
}


export class GetRevokeSnapshotAccessHeaders extends SpeakeasyBase {
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


export class GetRevokeSnapshotAccessRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRevokeSnapshotAccessQueryParams;

  @Metadata()
  headers: GetRevokeSnapshotAccessHeaders;
}


export class GetRevokeSnapshotAccessResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
