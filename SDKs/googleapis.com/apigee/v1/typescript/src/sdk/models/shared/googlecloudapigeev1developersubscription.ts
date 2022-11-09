import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1DeveloperSubscription
/** 
 * Structure of a DeveloperSubscription.
**/
export class GoogleCloudApigeeV1DeveloperSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiproduct" })
  apiproduct?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
