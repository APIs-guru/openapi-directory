import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteUsageLimitActionEnum {
    DeleteUsageLimit = "DeleteUsageLimit"
}

export enum GetDeleteUsageLimitVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteUsageLimitQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteUsageLimitActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UsageLimitId" })
  usageLimitId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteUsageLimitVersionEnum;
}


export class GetDeleteUsageLimitHeaders extends SpeakeasyBase {
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


export class GetDeleteUsageLimitRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteUsageLimitQueryParams;

  @Metadata()
  headers: GetDeleteUsageLimitHeaders;
}


export class GetDeleteUsageLimitResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
