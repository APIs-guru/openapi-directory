import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyUsageLimitActionEnum {
    ModifyUsageLimit = "ModifyUsageLimit"
}

export enum GetModifyUsageLimitBreachActionEnum {
    Log = "log",
    EmitMetric = "emit-metric",
    Disable = "disable"
}

export enum GetModifyUsageLimitVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyUsageLimitQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyUsageLimitActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BreachAction" })
  breachAction?: GetModifyUsageLimitBreachActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UsageLimitId" })
  usageLimitId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyUsageLimitVersionEnum;
}


export class GetModifyUsageLimitHeaders extends SpeakeasyBase {
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


export class GetModifyUsageLimitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyUsageLimitQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyUsageLimitHeaders;
}


export class GetModifyUsageLimitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
