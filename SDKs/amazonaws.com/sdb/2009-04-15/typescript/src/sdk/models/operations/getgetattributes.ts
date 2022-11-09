import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetAttributesActionEnum {
    GetAttributes = "GetAttributes"
}

export enum GetGetAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class GetGetAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" })
  attributeNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConsistentRead" })
  consistentRead?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ItemName" })
  itemName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAttributesVersionEnum;
}


export class GetGetAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetAttributesQueryParams;
}


export class GetGetAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
