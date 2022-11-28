package shared

// SentimentResponse
// <p>Provides information about the sentiment expressed in a user's response in a conversation. Sentiments are determined using Amazon Comprehend. Sentiments are only returned if they are enabled for the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html"> Determine Sentiment </a> in the <i>Amazon Comprehend developer guide</i>.</p>
type SentimentResponse struct {
	Sentiment      *SentimentTypeEnum `json:"sentiment,omitempty"`
	SentimentScore *SentimentScore    `json:"sentimentScore,omitempty"`
}
