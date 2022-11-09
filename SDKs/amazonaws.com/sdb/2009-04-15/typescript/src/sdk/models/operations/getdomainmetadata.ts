import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDomainMetadataActionEnum {
    DomainMetadata = "DomainMetadata"
}

export enum GetDomainMetadataVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class GetDomainMetadataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDomainMetadataActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDomainMetadataVersionEnum;
}


export class GetDomainMetadataRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDomainMetadataQueryParams;
}


export class GetDomainMetadataResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
