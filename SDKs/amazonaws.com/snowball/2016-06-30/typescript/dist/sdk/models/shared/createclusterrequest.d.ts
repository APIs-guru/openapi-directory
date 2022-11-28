import { SpeakeasyBase } from "../../../internal/utils";
import { JobTypeEnum } from "./jobtypeenum";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { RemoteManagementEnum } from "./remotemanagementenum";
import { JobResource } from "./jobresource";
import { ShippingOptionEnum } from "./shippingoptionenum";
import { SnowballTypeEnum } from "./snowballtypeenum";
import { TaxDocuments } from "./taxdocuments";
export declare class CreateClusterRequest extends SpeakeasyBase {
    addressId: string;
    description?: string;
    forwardingAddressId?: string;
    jobType: JobTypeEnum;
    kmsKeyArn?: string;
    notification?: Notification;
    onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
    remoteManagement?: RemoteManagementEnum;
    resources: JobResource;
    roleArn: string;
    shippingOption: ShippingOptionEnum;
    snowballType: SnowballTypeEnum;
    taxDocuments?: TaxDocuments;
}
