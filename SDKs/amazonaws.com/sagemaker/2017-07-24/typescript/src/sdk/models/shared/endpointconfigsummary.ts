import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointConfigSummary
/** 
 * Provides summary information for an endpoint configuration.
**/
export class EndpointConfigSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndpointConfigArn" })
  endpointConfigArn: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;
}
