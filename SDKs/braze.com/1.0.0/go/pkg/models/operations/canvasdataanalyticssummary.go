package operations

type CanvasDataAnalyticsSummaryQueryParams struct {
	CanvasID                *string `queryParam:"style=form,explode=true,name=canvas_id"`
	EndingAt                *string `queryParam:"style=form,explode=true,name=ending_at"`
	IncludeDeletedStepData  *string `queryParam:"style=form,explode=true,name=include_deleted_step_data"`
	IncludeStepBreakdown    *string `queryParam:"style=form,explode=true,name=include_step_breakdown"`
	IncludeVariantBreakdown *string `queryParam:"style=form,explode=true,name=include_variant_breakdown"`
	Length                  *string `queryParam:"style=form,explode=true,name=length"`
	StartingAt              *string `queryParam:"style=form,explode=true,name=starting_at"`
}

type CanvasDataAnalyticsSummaryRequest struct {
	QueryParams CanvasDataAnalyticsSummaryQueryParams
}

type CanvasDataAnalyticsSummaryResponse struct {
	ContentType string
	StatusCode  int64
}
