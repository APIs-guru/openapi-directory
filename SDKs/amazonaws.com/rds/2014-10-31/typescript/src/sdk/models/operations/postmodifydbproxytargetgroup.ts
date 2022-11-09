import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostModifyDbProxyTargetGroupActionEnum {
    ModifyDbProxyTargetGroup = "ModifyDBProxyTargetGroup"
}

export enum PostModifyDbProxyTargetGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostModifyDbProxyTargetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifyDbProxyTargetGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifyDbProxyTargetGroupVersionEnum;
}


export class PostModifyDbProxyTargetGroupHeaders extends SpeakeasyBase {
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


export class PostModifyDbProxyTargetGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostModifyDbProxyTargetGroupQueryParams;

  @Metadata()
  headers: PostModifyDbProxyTargetGroupHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifyDbProxyTargetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
