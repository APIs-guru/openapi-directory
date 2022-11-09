import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Filter
/** 
 * Contains information on a recommendation filter, including its ARN, status, and filter expression.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=filterArn" })
  filterArn?: string;

  @Metadata({ data: "json, name=filterExpression" })
  filterExpression?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
