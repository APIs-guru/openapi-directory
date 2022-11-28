import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CanvasDataSeriesAnalyticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=canvas_id" })
  canvasId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_deleted_step_data" })
  includeDeletedStepData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_step_breakdown" })
  includeStepBreakdown?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_variant_breakdown" })
  includeVariantBreakdown?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=starting_at" })
  startingAt?: string;
}


export class CanvasDataSeriesAnalyticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CanvasDataSeriesAnalyticsQueryParams;
}


export class CanvasDataSeriesAnalyticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
