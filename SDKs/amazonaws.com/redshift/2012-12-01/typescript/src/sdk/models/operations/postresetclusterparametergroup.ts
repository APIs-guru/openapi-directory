import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostResetClusterParameterGroupActionEnum {
    ResetClusterParameterGroup = "ResetClusterParameterGroup"
}

export enum PostResetClusterParameterGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostResetClusterParameterGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostResetClusterParameterGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostResetClusterParameterGroupVersionEnum;
}


export class PostResetClusterParameterGroupHeaders extends SpeakeasyBase {
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


export class PostResetClusterParameterGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostResetClusterParameterGroupQueryParams;

  @Metadata()
  headers: PostResetClusterParameterGroupHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostResetClusterParameterGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
