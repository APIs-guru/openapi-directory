import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobTypeEnum } from "./jobtypeenum";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { RemoteManagementEnum } from "./remotemanagementenum";
import { JobResource } from "./jobresource";
import { ShippingOptionEnum } from "./shippingoptionenum";
import { SnowballTypeEnum } from "./snowballtypeenum";
import { TaxDocuments } from "./taxdocuments";


export class CreateClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressId" })
  addressId: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ForwardingAddressId" })
  forwardingAddressId?: string;

  @Metadata({ data: "json, name=JobType" })
  jobType: JobTypeEnum;

  @Metadata({ data: "json, name=KmsKeyARN" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=Notification" })
  notification?: Notification;

  @Metadata({ data: "json, name=OnDeviceServiceConfiguration" })
  onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;

  @Metadata({ data: "json, name=RemoteManagement" })
  remoteManagement?: RemoteManagementEnum;

  @Metadata({ data: "json, name=Resources" })
  resources: JobResource;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @Metadata({ data: "json, name=ShippingOption" })
  shippingOption: ShippingOptionEnum;

  @Metadata({ data: "json, name=SnowballType" })
  snowballType: SnowballTypeEnum;

  @Metadata({ data: "json, name=TaxDocuments" })
  taxDocuments?: TaxDocuments;
}
