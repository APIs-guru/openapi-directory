import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSelectActionEnum {
    Select = "Select"
}

export enum GetSelectVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}


export class GetSelectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" })
  awsAccessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSelectActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConsistentRead" })
  consistentRead?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SelectExpression" })
  selectExpression: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Signature" })
  signature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" })
  signatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" })
  signatureVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSelectVersionEnum;
}


export class GetSelectRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSelectQueryParams;
}


export class GetSelectResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
