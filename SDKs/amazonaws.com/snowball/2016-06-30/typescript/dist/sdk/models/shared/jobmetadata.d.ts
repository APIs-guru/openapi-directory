import { SpeakeasyBase } from "../../../internal/utils";
import { DataTransfer } from "./datatransfer";
import { DeviceConfiguration } from "./deviceconfiguration";
import { JobLogs } from "./joblogs";
import { JobStateEnum } from "./jobstateenum";
import { JobTypeEnum } from "./jobtypeenum";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { RemoteManagementEnum } from "./remotemanagementenum";
import { JobResource } from "./jobresource";
import { ShippingDetails } from "./shippingdetails";
import { SnowballCapacityEnum } from "./snowballcapacityenum";
import { SnowballTypeEnum } from "./snowballtypeenum";
import { TaxDocuments } from "./taxdocuments";
/**
 * Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action.
**/
export declare class JobMetadata extends SpeakeasyBase {
    addressId?: string;
    clusterId?: string;
    creationDate?: Date;
    dataTransferProgress?: DataTransfer;
    description?: string;
    deviceConfiguration?: DeviceConfiguration;
    forwardingAddressId?: string;
    jobId?: string;
    jobLogInfo?: JobLogs;
    jobState?: JobStateEnum;
    jobType?: JobTypeEnum;
    kmsKeyArn?: string;
    longTermPricingId?: string;
    notification?: Notification;
    onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
    remoteManagement?: RemoteManagementEnum;
    resources?: JobResource;
    roleArn?: string;
    shippingDetails?: ShippingDetails;
    snowballCapacityPreference?: SnowballCapacityEnum;
    snowballType?: SnowballTypeEnum;
    taxDocuments?: TaxDocuments;
}
