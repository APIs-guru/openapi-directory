import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateEnum } from "./clusterstateenum";
import { JobTypeEnum } from "./jobtypeenum";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { JobResource } from "./jobresource";
import { ShippingOptionEnum } from "./shippingoptionenum";
import { SnowballTypeEnum } from "./snowballtypeenum";
import { TaxDocuments } from "./taxdocuments";



// ClusterMetadata
/** 
 * Contains metadata about a specific cluster.
**/
export class ClusterMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressId" })
  addressId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterState" })
  clusterState?: ClusterStateEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ForwardingAddressId" })
  forwardingAddressId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobType" })
  jobType?: JobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyARN" })
  kmsKeyArn?: string;

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

  @SpeakeasyMetadata({ data: "json, name=SnowballType" })
  snowballType?: SnowballTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TaxDocuments" })
  taxDocuments?: TaxDocuments;
}
