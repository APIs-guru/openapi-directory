import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { JobResource } from "./jobresource";
import { ShippingOptionEnum } from "./shippingoptionenum";



export class UpdateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressId" })
  addressId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ForwardingAddressId" })
  forwardingAddressId?: string;

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
}
