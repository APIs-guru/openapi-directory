import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeInsightRulesActionEnum {
    DescribeInsightRules = "DescribeInsightRules"
}

export enum GetDescribeInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetDescribeInsightRulesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeInsightRulesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeInsightRulesVersionEnum;
}


export class GetDescribeInsightRulesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetDescribeInsightRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeInsightRulesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeInsightRulesHeaders;
}


export class GetDescribeInsightRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
