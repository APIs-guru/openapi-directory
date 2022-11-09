import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MobileDeviceApplications extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=permission" })
  permission?: string[];

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: number;

  @Metadata({ data: "json, name=versionName" })
  versionName?: string;
}


// MobileDevice
/** 
 * Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html).
**/
export class MobileDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=adbStatus" })
  adbStatus?: boolean;

  @Metadata({ data: "json, name=applications", elemType: shared.MobileDeviceApplications })
  applications?: MobileDeviceApplications[];

  @Metadata({ data: "json, name=basebandVersion" })
  basebandVersion?: string;

  @Metadata({ data: "json, name=bootloaderVersion" })
  bootloaderVersion?: string;

  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=buildNumber" })
  buildNumber?: string;

  @Metadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @Metadata({ data: "json, name=developerOptionsStatus" })
  developerOptionsStatus?: boolean;

  @Metadata({ data: "json, name=deviceCompromisedStatus" })
  deviceCompromisedStatus?: string;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=devicePasswordStatus" })
  devicePasswordStatus?: string;

  @Metadata({ data: "json, name=email" })
  email?: string[];

  @Metadata({ data: "json, name=encryptionStatus" })
  encryptionStatus?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=firstSync" })
  firstSync?: Date;

  @Metadata({ data: "json, name=hardware" })
  hardware?: string;

  @Metadata({ data: "json, name=hardwareId" })
  hardwareId?: string;

  @Metadata({ data: "json, name=imei" })
  imei?: string;

  @Metadata({ data: "json, name=kernelVersion" })
  kernelVersion?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @Metadata({ data: "json, name=managedAccountIsOnOwnerProfile" })
  managedAccountIsOnOwnerProfile?: boolean;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=meid" })
  meid?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=name" })
  name?: string[];

  @Metadata({ data: "json, name=networkOperator" })
  networkOperator?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;

  @Metadata({ data: "json, name=otherAccountsInfo" })
  otherAccountsInfo?: string[];

  @Metadata({ data: "json, name=privilege" })
  privilege?: string;

  @Metadata({ data: "json, name=releaseVersion" })
  releaseVersion?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=securityPatchLevel" })
  securityPatchLevel?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=supportsWorkProfile" })
  supportsWorkProfile?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=unknownSourcesStatus" })
  unknownSourcesStatus?: boolean;

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: string;

  @Metadata({ data: "json, name=wifiMacAddress" })
  wifiMacAddress?: string;
}
