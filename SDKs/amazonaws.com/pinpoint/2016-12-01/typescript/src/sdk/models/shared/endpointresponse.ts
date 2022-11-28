import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
import { EndpointDemographic } from "./endpointdemographic";
import { EndpointLocation } from "./endpointlocation";
import { EndpointUser } from "./endpointuser";



// EndpointResponse
/** 
 * Provides information about the channel type and other settings for an endpoint.
**/
export class EndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=ChannelType" })
  channelType?: ChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CohortId" })
  cohortId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Demographic" })
  demographic?: EndpointDemographic;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointStatus" })
  endpointStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: EndpointLocation;

  @SpeakeasyMetadata({ data: "json, name=Metrics" })
  metrics?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=OptOut" })
  optOut?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: EndpointUser;
}
