import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { JobResource } from "./jobresource";
import { ShippingOptionEnum } from "./shippingoptionenum";
import { SnowballCapacityEnum } from "./snowballcapacityenum";



export class UpdateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressId" })
  addressId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ForwardingAddressId" })
  forwardingAddressId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=Notification" })
  notification?: Notification;

  @SpeakeasyMetadata({ data: "json, name=OnDeviceServiceConfiguration" })
  onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Resources" })
  resources?: JobResource;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingOption" })
  shippingOption?: ShippingOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=SnowballCapacityPreference" })
  snowballCapacityPreference?: SnowballCapacityEnum;
}
