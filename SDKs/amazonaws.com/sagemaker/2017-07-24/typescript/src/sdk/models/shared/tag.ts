import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * <p>A tag object that consists of a key and an optional value, used to manage metadata for Amazon SageMaker Amazon Web Services resources.</p> <p>You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to Amazon SageMaker resources, see <a>AddTags</a>.</p> <p>For more information on adding metadata to your Amazon Web Services resources with tagging, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>. For advice on best practices for managing Amazon Web Services resources with tagging, see <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging Best Practices: Implement an Effective Amazon Web Services Resource Tagging Strategy</a>.</p>
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
