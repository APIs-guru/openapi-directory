package shared

// AutoMlResult
// When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), specifies the recipe that best optimized the specified metric.
type AutoMlResult struct {
	BestRecipeArn *string `json:"bestRecipeArn,omitempty"`
}
