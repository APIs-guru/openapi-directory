import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainConfiguration
/** 
 * Contains the configuration settings of a domain.
**/
export class DomainConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workflowExecutionRetentionPeriodInDays" })
  workflowExecutionRetentionPeriodInDays: string;
}
