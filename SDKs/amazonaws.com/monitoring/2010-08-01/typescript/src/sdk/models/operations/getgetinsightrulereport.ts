import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetInsightRuleReportActionEnum {
    GetInsightRuleReport = "GetInsightRuleReport"
}

export enum GetGetInsightRuleReportVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetGetInsightRuleReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetInsightRuleReportActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxContributorCount" })
  maxContributorCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Metrics" })
  metrics?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=OrderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Period" })
  period: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleName" })
  ruleName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetInsightRuleReportVersionEnum;
}


export class GetGetInsightRuleReportHeaders extends SpeakeasyBase {
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


export class GetGetInsightRuleReportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetInsightRuleReportQueryParams;

  @Metadata()
  headers: GetGetInsightRuleReportHeaders;
}


export class GetGetInsightRuleReportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
