import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteDbProxyEndpointActionEnum {
    DeleteDbProxyEndpoint = "DeleteDBProxyEndpoint"
}

export enum GetDeleteDbProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDeleteDbProxyEndpointQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteDbProxyEndpointActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBProxyEndpointName" })
  dbProxyEndpointName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteDbProxyEndpointVersionEnum;
}


export class GetDeleteDbProxyEndpointHeaders extends SpeakeasyBase {
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


export class GetDeleteDbProxyEndpointRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteDbProxyEndpointQueryParams;

  @Metadata()
  headers: GetDeleteDbProxyEndpointHeaders;
}


export class GetDeleteDbProxyEndpointResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
