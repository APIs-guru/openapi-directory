import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";



// EndpointSummary
/** 
 * Provides summary information for an endpoint.
**/
export class EndpointSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointStatus" })
  endpointStatus: EndpointStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;
}
