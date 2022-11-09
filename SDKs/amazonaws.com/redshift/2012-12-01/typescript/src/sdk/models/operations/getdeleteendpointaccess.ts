import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteEndpointAccessActionEnum {
    DeleteEndpointAccess = "DeleteEndpointAccess"
}

export enum GetDeleteEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteEndpointAccessQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteEndpointAccessActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndpointName" })
  endpointName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteEndpointAccessVersionEnum;
}


export class GetDeleteEndpointAccessHeaders extends SpeakeasyBase {
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


export class GetDeleteEndpointAccessRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteEndpointAccessQueryParams;

  @Metadata()
  headers: GetDeleteEndpointAccessHeaders;
}


export class GetDeleteEndpointAccessResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
