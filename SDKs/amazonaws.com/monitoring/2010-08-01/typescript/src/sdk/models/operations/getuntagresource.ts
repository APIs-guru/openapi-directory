import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUntagResourceActionEnum {
    UntagResource = "UntagResource"
}

export enum GetUntagResourceVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetUntagResourceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUntagResourceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ResourceARN" })
  resourceArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUntagResourceVersionEnum;
}


export class GetUntagResourceHeaders extends SpeakeasyBase {
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


export class GetUntagResourceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUntagResourceQueryParams;

  @Metadata()
  headers: GetUntagResourceHeaders;
}


export class GetUntagResourceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
