import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails
/** 
 * The container health check command and associated configuration parameters for the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=Retries" })
  retries?: number;

  @SpeakeasyMetadata({ data: "json, name=StartPeriod" })
  startPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;
}
