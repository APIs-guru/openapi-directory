import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostRegisterDbProxyTargetsActionEnum {
    RegisterDbProxyTargets = "RegisterDBProxyTargets"
}

export enum PostRegisterDbProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostRegisterDbProxyTargetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRegisterDbProxyTargetsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRegisterDbProxyTargetsVersionEnum;
}


export class PostRegisterDbProxyTargetsHeaders extends SpeakeasyBase {
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


export class PostRegisterDbProxyTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostRegisterDbProxyTargetsQueryParams;

  @SpeakeasyMetadata()
  headers: PostRegisterDbProxyTargetsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRegisterDbProxyTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
