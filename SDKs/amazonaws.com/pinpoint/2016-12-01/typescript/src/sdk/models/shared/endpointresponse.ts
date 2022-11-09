import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
import { EndpointDemographic } from "./endpointdemographic";
import { EndpointLocation } from "./endpointlocation";
import { EndpointUser } from "./endpointuser";


// EndpointResponse
/** 
 * Provides information about the channel type and other settings for an endpoint.
**/
export class EndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string[]>;

  @Metadata({ data: "json, name=ChannelType" })
  channelType?: ChannelTypeEnum;

  @Metadata({ data: "json, name=CohortId" })
  cohortId?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=Demographic" })
  demographic?: EndpointDemographic;

  @Metadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: string;

  @Metadata({ data: "json, name=EndpointStatus" })
  endpointStatus?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Location" })
  location?: EndpointLocation;

  @Metadata({ data: "json, name=Metrics" })
  metrics?: Map<string, number>;

  @Metadata({ data: "json, name=OptOut" })
  optOut?: string;

  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=User" })
  user?: EndpointUser;
}
