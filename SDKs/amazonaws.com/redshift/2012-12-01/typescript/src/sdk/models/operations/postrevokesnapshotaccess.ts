import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostRevokeSnapshotAccessActionEnum {
    RevokeSnapshotAccess = "RevokeSnapshotAccess"
}

export enum PostRevokeSnapshotAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostRevokeSnapshotAccessQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRevokeSnapshotAccessActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRevokeSnapshotAccessVersionEnum;
}


export class PostRevokeSnapshotAccessHeaders extends SpeakeasyBase {
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


export class PostRevokeSnapshotAccessRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostRevokeSnapshotAccessQueryParams;

  @Metadata()
  headers: PostRevokeSnapshotAccessHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRevokeSnapshotAccessResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
