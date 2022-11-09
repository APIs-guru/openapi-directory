import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEnableInsightRulesActionEnum {
    EnableInsightRules = "EnableInsightRules"
}

export enum GetEnableInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetEnableInsightRulesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableInsightRulesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleNames" })
  ruleNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableInsightRulesVersionEnum;
}


export class GetEnableInsightRulesHeaders extends SpeakeasyBase {
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


export class GetEnableInsightRulesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEnableInsightRulesQueryParams;

  @Metadata()
  headers: GetEnableInsightRulesHeaders;
}


export class GetEnableInsightRulesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
