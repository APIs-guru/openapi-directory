import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteSnapshotCopyGrantActionEnum {
    DeleteSnapshotCopyGrant = "DeleteSnapshotCopyGrant"
}

export enum GetDeleteSnapshotCopyGrantVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteSnapshotCopyGrantQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteSnapshotCopyGrantActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotCopyGrantName" })
  snapshotCopyGrantName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteSnapshotCopyGrantVersionEnum;
}


export class GetDeleteSnapshotCopyGrantHeaders extends SpeakeasyBase {
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


export class GetDeleteSnapshotCopyGrantRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteSnapshotCopyGrantQueryParams;

  @Metadata()
  headers: GetDeleteSnapshotCopyGrantHeaders;
}


export class GetDeleteSnapshotCopyGrantResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
