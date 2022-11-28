import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetAttributesActionEnum {
    GetAttributes = "GetAttributes"
}

export enum GetGetAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class GetGetAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" })
  attributeNames?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConsistentRead" })
  consistentRead?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ItemName" })
  itemName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAttributesVersionEnum;
}


export class GetGetAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetAttributesQueryParams;
}


export class GetGetAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
