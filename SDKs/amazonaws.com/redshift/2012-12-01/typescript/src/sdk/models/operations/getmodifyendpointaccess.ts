import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyEndpointAccessActionEnum {
    ModifyEndpointAccess = "ModifyEndpointAccess"
}

export enum GetModifyEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyEndpointAccessQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyEndpointAccessActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndpointName" })
  endpointName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyEndpointAccessVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}


export class GetModifyEndpointAccessHeaders extends SpeakeasyBase {
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


export class GetModifyEndpointAccessRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyEndpointAccessQueryParams;

  @Metadata()
  headers: GetModifyEndpointAccessHeaders;
}


export class GetModifyEndpointAccessResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
