import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteDbProxyActionEnum {
    DeleteDbProxy = "DeleteDBProxy"
}

export enum GetDeleteDbProxyVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDeleteDbProxyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteDbProxyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBProxyName" })
  dbProxyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteDbProxyVersionEnum;
}


export class GetDeleteDbProxyHeaders extends SpeakeasyBase {
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


export class GetDeleteDbProxyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteDbProxyQueryParams;

  @Metadata()
  headers: GetDeleteDbProxyHeaders;
}


export class GetDeleteDbProxyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
