import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListTagsForResourceActionEnum {
    ListTagsForResource = "ListTagsForResource"
}

export enum GetListTagsForResourceVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetListTagsForResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListTagsForResourceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListTagsForResourceVersionEnum;
}


export class GetListTagsForResourceHeaders extends SpeakeasyBase {
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


export class GetListTagsForResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListTagsForResourceQueryParams;

  @SpeakeasyMetadata()
  headers: GetListTagsForResourceHeaders;
}


export class GetListTagsForResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
