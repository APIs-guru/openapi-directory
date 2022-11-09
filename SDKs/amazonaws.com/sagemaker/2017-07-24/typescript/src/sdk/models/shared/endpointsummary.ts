import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";


// EndpointSummary
/** 
 * Provides summary information for an endpoint.
**/
export class EndpointSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @Metadata({ data: "json, name=EndpointStatus" })
  endpointStatus: EndpointStatusEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;
}
