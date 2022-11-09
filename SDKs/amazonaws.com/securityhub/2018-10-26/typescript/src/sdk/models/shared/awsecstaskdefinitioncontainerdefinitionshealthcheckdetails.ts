import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails
/** 
 * The container health check command and associated configuration parameters for the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Command" })
  command?: string[];

  @Metadata({ data: "json, name=Interval" })
  interval?: number;

  @Metadata({ data: "json, name=Retries" })
  retries?: number;

  @Metadata({ data: "json, name=StartPeriod" })
  startPeriod?: number;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;
}
