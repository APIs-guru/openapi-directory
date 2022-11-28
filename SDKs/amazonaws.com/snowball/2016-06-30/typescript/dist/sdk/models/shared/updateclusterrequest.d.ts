import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { JobResource } from "./jobresource";
import { ShippingOptionEnum } from "./shippingoptionenum";
export declare class UpdateClusterRequest extends SpeakeasyBase {
    addressId?: string;
    clusterId: string;
    description?: string;
    forwardingAddressId?: string;
    notification?: Notification;
    onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
    resources?: JobResource;
    roleArn?: string;
    shippingOption?: ShippingOptionEnum;
}
