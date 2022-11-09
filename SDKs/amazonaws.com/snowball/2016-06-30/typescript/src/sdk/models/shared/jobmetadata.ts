import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=AddressId" })
  addressId?: string;

  @Metadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=DataTransferProgress" })
  dataTransferProgress?: DataTransfer;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DeviceConfiguration" })
  deviceConfiguration?: DeviceConfiguration;

  @Metadata({ data: "json, name=ForwardingAddressId" })
  forwardingAddressId?: string;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobLogInfo" })
  jobLogInfo?: JobLogs;

  @Metadata({ data: "json, name=JobState" })
  jobState?: JobStateEnum;

  @Metadata({ data: "json, name=JobType" })
  jobType?: JobTypeEnum;

  @Metadata({ data: "json, name=KmsKeyARN" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=LongTermPricingId" })
  longTermPricingId?: string;

  @Metadata({ data: "json, name=Notification" })
  notification?: Notification;

  @Metadata({ data: "json, name=OnDeviceServiceConfiguration" })
  onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;

  @Metadata({ data: "json, name=RemoteManagement" })
  remoteManagement?: RemoteManagementEnum;

  @Metadata({ data: "json, name=Resources" })
  resources?: JobResource;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @Metadata({ data: "json, name=ShippingDetails" })
  shippingDetails?: ShippingDetails;

  @Metadata({ data: "json, name=SnowballCapacityPreference" })
  snowballCapacityPreference?: SnowballCapacityEnum;

  @Metadata({ data: "json, name=SnowballType" })
  snowballType?: SnowballTypeEnum;

  @Metadata({ data: "json, name=TaxDocuments" })
  taxDocuments?: TaxDocuments;
}
