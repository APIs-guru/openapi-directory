import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointConfigSummary
/** 
 * Provides summary information for an endpoint configuration.
**/
export class EndpointConfigSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=EndpointConfigArn" })
  endpointConfigArn: string;

  @Metadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;
}
