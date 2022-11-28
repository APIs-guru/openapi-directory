import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetMetricWidgetImageActionEnum {
    GetMetricWidgetImage = "GetMetricWidgetImage"
}

export enum GetGetMetricWidgetImageVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetGetMetricWidgetImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetMetricWidgetImageActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MetricWidget" })
  metricWidget: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OutputFormat" })
  outputFormat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetMetricWidgetImageVersionEnum;
}


export class GetGetMetricWidgetImageHeaders extends SpeakeasyBase {
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


export class GetGetMetricWidgetImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetMetricWidgetImageQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetMetricWidgetImageHeaders;
}


export class GetGetMetricWidgetImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
