import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainConfiguration
/** 
 * Contains the configuration settings of a domain.
**/
export class DomainConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=workflowExecutionRetentionPeriodInDays" })
  workflowExecutionRetentionPeriodInDays: string;
}
