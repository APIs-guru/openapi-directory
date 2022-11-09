import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListDomainsActionEnum {
    ListDomains = "ListDomains"
}

export enum GetListDomainsVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class GetListDomainsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListDomainsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxNumberOfDomains" })
  maxNumberOfDomains?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListDomainsVersionEnum;
}


export class GetListDomainsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListDomainsQueryParams;
}


export class GetListDomainsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
