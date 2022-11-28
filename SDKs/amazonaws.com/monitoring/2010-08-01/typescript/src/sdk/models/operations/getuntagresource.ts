import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUntagResourceActionEnum {
    UntagResource = "UntagResource"
}

export enum GetUntagResourceVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetUntagResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUntagResourceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUntagResourceVersionEnum;
}


export class GetUntagResourceHeaders extends SpeakeasyBase {
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


export class GetUntagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUntagResourceQueryParams;

  @SpeakeasyMetadata()
  headers: GetUntagResourceHeaders;
}


export class GetUntagResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
