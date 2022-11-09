import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteInsightRulesActionEnum {
    DeleteInsightRules = "DeleteInsightRules"
}

export enum GetDeleteInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetDeleteInsightRulesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteInsightRulesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleNames" })
  ruleNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteInsightRulesVersionEnum;
}


export class GetDeleteInsightRulesHeaders extends SpeakeasyBase {
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


export class GetDeleteInsightRulesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteInsightRulesQueryParams;

  @Metadata()
  headers: GetDeleteInsightRulesHeaders;
}


export class GetDeleteInsightRulesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
