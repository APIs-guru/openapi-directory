import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// JobMetadata
/** 
 * Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action.
**/
export class JobMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressId" })
  addressId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataTransferProgress" })
  dataTransferProgress?: DataTransfer;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceConfiguration" })
  deviceConfiguration?: DeviceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ForwardingAddressId" })
  forwardingAddressId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobLogInfo" })
  jobLogInfo?: JobLogs;

  @SpeakeasyMetadata({ data: "json, name=JobState" })
  jobState?: JobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=JobType" })
  jobType?: JobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyARN" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LongTermPricingId" })
  longTermPricingId?: string;

  @SpeakeasyMetadata({ data: "json, name=Notification" })
  notification?: Notification;

  @SpeakeasyMetadata({ data: "json, name=OnDeviceServiceConfiguration" })
  onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RemoteManagement" })
  remoteManagement?: RemoteManagementEnum;

  @SpeakeasyMetadata({ data: "json, name=Resources" })
  resources?: JobResource;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingDetails" })
  shippingDetails?: ShippingDetails;

  @SpeakeasyMetadata({ data: "json, name=SnowballCapacityPreference" })
  snowballCapacityPreference?: SnowballCapacityEnum;

  @SpeakeasyMetadata({ data: "json, name=SnowballType" })
  snowballType?: SnowballTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TaxDocuments" })
  taxDocuments?: TaxDocuments;
}
