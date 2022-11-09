import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { JobResource } from "./jobresource";
import { ShippingOptionEnum } from "./shippingoptionenum";


export class UpdateClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressId" })
  addressId?: string;

  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ForwardingAddressId" })
  forwardingAddressId?: string;

  @Metadata({ data: "json, name=Notification" })
  notification?: Notification;

  @Metadata({ data: "json, name=OnDeviceServiceConfiguration" })
  onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;

  @Metadata({ data: "json, name=Resources" })
  resources?: JobResource;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @Metadata({ data: "json, name=ShippingOption" })
  shippingOption?: ShippingOptionEnum;
}
