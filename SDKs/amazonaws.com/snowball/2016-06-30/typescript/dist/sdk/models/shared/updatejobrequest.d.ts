import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { JobResource } from "./jobresource";
import { ShippingOptionEnum } from "./shippingoptionenum";
import { SnowballCapacityEnum } from "./snowballcapacityenum";
export declare class UpdateJobRequest extends SpeakeasyBase {
    addressId?: string;
    description?: string;
    forwardingAddressId?: string;
    jobId: string;
    notification?: Notification;
    onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
    resources?: JobResource;
    roleArn?: string;
    shippingOption?: ShippingOptionEnum;
    snowballCapacityPreference?: SnowballCapacityEnum;
}
