import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CanvasDataAnalyticsSummaryQueryParams extends SpeakeasyBase {
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


export class CanvasDataAnalyticsSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CanvasDataAnalyticsSummaryQueryParams;
}


export class CanvasDataAnalyticsSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
