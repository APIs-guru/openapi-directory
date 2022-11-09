import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetMetricWidgetImageActionEnum {
    GetMetricWidgetImage = "GetMetricWidgetImage"
}

export enum PostGetMetricWidgetImageVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class PostGetMetricWidgetImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetMetricWidgetImageActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetMetricWidgetImageVersionEnum;
}


export class PostGetMetricWidgetImageHeaders extends SpeakeasyBase {
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


export class PostGetMetricWidgetImageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetMetricWidgetImageQueryParams;

  @Metadata()
  headers: PostGetMetricWidgetImageHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetMetricWidgetImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
