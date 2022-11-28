import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1DeveloperSubscriptionInput
/** 
 * Structure of a DeveloperSubscription.
**/
export class GoogleCloudApigeeV1DeveloperSubscriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiproduct" })
  apiproduct?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}


// GoogleCloudApigeeV1DeveloperSubscription
/** 
 * Structure of a DeveloperSubscription.
**/
export class GoogleCloudApigeeV1DeveloperSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiproduct" })
  apiproduct?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
