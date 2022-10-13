package shared

type ListCallAnalyticsCategoriesResponse struct {
	Categories []CategoryProperties `json:"Categories"`
	NextToken  *string              `json:"NextToken"`
}
