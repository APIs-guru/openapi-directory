import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyDbProxyEndpointActionEnum {
    ModifyDbProxyEndpoint = "ModifyDBProxyEndpoint"
}

export enum GetModifyDbProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyDbProxyEndpointQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbProxyEndpointActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBProxyEndpointName" })
  dbProxyEndpointName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewDBProxyEndpointName" })
  newDbProxyEndpointName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbProxyEndpointVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}


export class GetModifyDbProxyEndpointHeaders extends SpeakeasyBase {
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


export class GetModifyDbProxyEndpointRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyDbProxyEndpointQueryParams;

  @Metadata()
  headers: GetModifyDbProxyEndpointHeaders;
}


export class GetModifyDbProxyEndpointResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
