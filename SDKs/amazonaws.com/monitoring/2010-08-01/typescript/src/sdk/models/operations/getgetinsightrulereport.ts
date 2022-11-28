import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetInsightRuleReportActionEnum {
    GetInsightRuleReport = "GetInsightRuleReport"
}

export enum GetGetInsightRuleReportVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetGetInsightRuleReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetInsightRuleReportActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxContributorCount" })
  maxContributorCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Metrics" })
  metrics?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OrderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Period" })
  period: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleName" })
  ruleName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetInsightRuleReportVersionEnum;
}


export class GetGetInsightRuleReportHeaders extends SpeakeasyBase {
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


export class GetGetInsightRuleReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetInsightRuleReportQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetInsightRuleReportHeaders;
}


export class GetGetInsightRuleReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
