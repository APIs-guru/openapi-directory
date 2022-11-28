import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDomainMetadataActionEnum {
    DomainMetadata = "DomainMetadata"
}

export enum GetDomainMetadataVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class GetDomainMetadataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDomainMetadataActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDomainMetadataVersionEnum;
}


export class GetDomainMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDomainMetadataQueryParams;
}


export class GetDomainMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
