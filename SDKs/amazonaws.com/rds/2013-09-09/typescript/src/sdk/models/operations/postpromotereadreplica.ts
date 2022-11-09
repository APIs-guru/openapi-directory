import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostPromoteReadReplicaActionEnum {
    PromoteReadReplica = "PromoteReadReplica"
}

export enum PostPromoteReadReplicaVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}


export class PostPromoteReadReplicaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostPromoteReadReplicaActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostPromoteReadReplicaVersionEnum;
}


export class PostPromoteReadReplicaHeaders extends SpeakeasyBase {
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


export class PostPromoteReadReplicaRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostPromoteReadReplicaQueryParams;

  @Metadata()
  headers: PostPromoteReadReplicaHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostPromoteReadReplicaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
