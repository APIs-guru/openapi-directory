import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSelectActionEnum {
    Select = "Select"
}

export enum GetSelectVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class GetSelectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSelectActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConsistentRead" })
  consistentRead?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SelectExpression" })
  selectExpression: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSelectVersionEnum;
}


export class GetSelectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSelectQueryParams;
}


export class GetSelectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
