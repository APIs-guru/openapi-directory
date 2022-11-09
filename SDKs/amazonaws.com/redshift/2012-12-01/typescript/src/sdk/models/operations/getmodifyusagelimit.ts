import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyUsageLimitActionEnum {
    ModifyUsageLimit = "ModifyUsageLimit"
}

export enum GetModifyUsageLimitBreachActionEnum {
    Log = "log"
,    EmitMetric = "emit-metric"
,    Disable = "disable"
}

export enum GetModifyUsageLimitVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyUsageLimitQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyUsageLimitActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Amount" })
  amount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=BreachAction" })
  breachAction?: GetModifyUsageLimitBreachActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UsageLimitId" })
  usageLimitId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyUsageLimitVersionEnum;
}


export class GetModifyUsageLimitHeaders extends SpeakeasyBase {
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


export class GetModifyUsageLimitRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyUsageLimitQueryParams;

  @Metadata()
  headers: GetModifyUsageLimitHeaders;
}


export class GetModifyUsageLimitResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
