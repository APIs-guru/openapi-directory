import { SpeakeasyBase } from "../../../internal/utils";
export declare class MobileDeviceApplications extends SpeakeasyBase {
    displayName?: string;
    packageName?: string;
    permission?: string[];
    versionCode?: number;
    versionName?: string;
}
/**
 * Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html).
**/
export declare class MobileDevice extends SpeakeasyBase {
    adbStatus?: boolean;
    applications?: MobileDeviceApplications[];
    basebandVersion?: string;
    bootloaderVersion?: string;
    brand?: string;
    buildNumber?: string;
    defaultLanguage?: string;
    developerOptionsStatus?: boolean;
    deviceCompromisedStatus?: string;
    deviceId?: string;
    devicePasswordStatus?: string;
    email?: string[];
    encryptionStatus?: string;
    etag?: string;
    firstSync?: Date;
    hardware?: string;
    hardwareId?: string;
    imei?: string;
    kernelVersion?: string;
    kind?: string;
    lastSync?: Date;
    managedAccountIsOnOwnerProfile?: boolean;
    manufacturer?: string;
    meid?: string;
    model?: string;
    name?: string[];
    networkOperator?: string;
    os?: string;
    otherAccountsInfo?: string[];
    privilege?: string;
    releaseVersion?: string;
    resourceId?: string;
    securityPatchLevel?: string;
    serialNumber?: string;
    status?: string;
    supportsWorkProfile?: boolean;
    type?: string;
    unknownSourcesStatus?: boolean;
    userAgent?: string;
    wifiMacAddress?: string;
}
