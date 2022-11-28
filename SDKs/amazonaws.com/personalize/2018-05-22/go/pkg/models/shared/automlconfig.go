package shared

// AutoMlConfig
// When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.
type AutoMlConfig struct {
	MetricName *string  `json:"metricName,omitempty"`
	RecipeList []string `json:"recipeList,omitempty"`
}
