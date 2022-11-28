import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MobileDeviceApplications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string[];

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: number;

  @SpeakeasyMetadata({ data: "json, name=versionName" })
  versionName?: string;
}


// MobileDevice
/** 
 * Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html).
**/
export class MobileDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adbStatus" })
  adbStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=applications", elemType: MobileDeviceApplications })
  applications?: MobileDeviceApplications[];

  @SpeakeasyMetadata({ data: "json, name=basebandVersion" })
  basebandVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=bootloaderVersion" })
  bootloaderVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=buildNumber" })
  buildNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=developerOptionsStatus" })
  developerOptionsStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deviceCompromisedStatus" })
  deviceCompromisedStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=devicePasswordStatus" })
  devicePasswordStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string[];

  @SpeakeasyMetadata({ data: "json, name=encryptionStatus" })
  encryptionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=firstSync" })
  firstSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=hardware" })
  hardware?: string;

  @SpeakeasyMetadata({ data: "json, name=hardwareId" })
  hardwareId?: string;

  @SpeakeasyMetadata({ data: "json, name=imei" })
  imei?: string;

  @SpeakeasyMetadata({ data: "json, name=kernelVersion" })
  kernelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=managedAccountIsOnOwnerProfile" })
  managedAccountIsOnOwnerProfile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=meid" })
  meid?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string[];

  @SpeakeasyMetadata({ data: "json, name=networkOperator" })
  networkOperator?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=otherAccountsInfo" })
  otherAccountsInfo?: string[];

  @SpeakeasyMetadata({ data: "json, name=privilege" })
  privilege?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseVersion" })
  releaseVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=securityPatchLevel" })
  securityPatchLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=supportsWorkProfile" })
  supportsWorkProfile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=unknownSourcesStatus" })
  unknownSourcesStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=wifiMacAddress" })
  wifiMacAddress?: string;
}
