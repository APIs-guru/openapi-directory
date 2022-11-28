import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateEnum } from "./clusterstateenum";
import { JobTypeEnum } from "./jobtypeenum";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { JobResource } from "./jobresource";
import { ShippingOptionEnum } from "./shippingoptionenum";
import { SnowballTypeEnum } from "./snowballtypeenum";
import { TaxDocuments } from "./taxdocuments";
/**
 * Contains metadata about a specific cluster.
**/
export declare class ClusterMetadata extends SpeakeasyBase {
    addressId?: string;
    clusterId?: string;
    clusterState?: ClusterStateEnum;
    creationDate?: Date;
    description?: string;
    forwardingAddressId?: string;
    jobType?: JobTypeEnum;
    kmsKeyArn?: string;
    notification?: Notification;
    onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
    resources?: JobResource;
    roleArn?: string;
    shippingOption?: ShippingOptionEnum;
    snowballType?: SnowballTypeEnum;
    taxDocuments?: TaxDocuments;
}
