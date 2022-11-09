import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CanvasDataAnalyticsSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=canvas_id" })
  canvasId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_deleted_step_data" })
  includeDeletedStepData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_step_breakdown" })
  includeStepBreakdown?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_variant_breakdown" })
  includeVariantBreakdown?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_at" })
  startingAt?: string;
}


export class CanvasDataAnalyticsSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CanvasDataAnalyticsSummaryQueryParams;
}


export class CanvasDataAnalyticsSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
