import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetMetricWidgetImageActionEnum {
    GetMetricWidgetImage = "GetMetricWidgetImage"
}

export enum GetGetMetricWidgetImageVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetGetMetricWidgetImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetMetricWidgetImageActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MetricWidget" })
  metricWidget: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OutputFormat" })
  outputFormat?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetMetricWidgetImageVersionEnum;
}


export class GetGetMetricWidgetImageHeaders extends SpeakeasyBase {
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


export class GetGetMetricWidgetImageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetMetricWidgetImageQueryParams;

  @Metadata()
  headers: GetGetMetricWidgetImageHeaders;
}


export class GetGetMetricWidgetImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
