import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeEventCategoriesActionEnum {
    DescribeEventCategories = "DescribeEventCategories"
}

export enum GetDescribeEventCategoriesVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetDescribeEventCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEventCategoriesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEventCategoriesVersionEnum;
}


export class GetDescribeEventCategoriesHeaders extends SpeakeasyBase {
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


export class GetDescribeEventCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeEventCategoriesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeEventCategoriesHeaders;
}


export class GetDescribeEventCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
