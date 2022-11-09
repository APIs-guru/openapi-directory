import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion } from "./1v21actionsgetresponses200contentapplication1jsonschemaallof0propertiesactionsitemspropertiesregion";

export enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageDistributionEnum {
    ArchLinux = "Arch Linux"
,    CentOs = "CentOS"
,    CoreOs = "CoreOS"
,    Debian = "Debian"
,    Fedora = "Fedora"
,    FedoraAtomic = "Fedora Atomic"
,    FreeBsd = "FreeBSD"
,    Gentoo = "Gentoo"
,    OpenSuse = "openSUSE"
,    RancherOs = "RancherOS"
,    Ubuntu = "Ubuntu"
,    Unknown = "Unknown"
}

export enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageRegionsEnum {
    Ams1 = "ams1"
,    Ams2 = "ams2"
,    Ams3 = "ams3"
,    Blr1 = "blr1"
,    Fra1 = "fra1"
,    Lon1 = "lon1"
,    Nyc1 = "nyc1"
,    Nyc2 = "nyc2"
,    Nyc3 = "nyc3"
,    Sfo1 = "sfo1"
,    Sfo2 = "sfo2"
,    Sfo3 = "sfo3"
,    Sgp1 = "sgp1"
,    Tor1 = "tor1"
}

export enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageStatusEnum {
    NewUpper = "NEW"
,    NewLower = "new"
,    Available = "available"
,    Pending = "pending"
,    Deleted = "deleted"
,    Retired = "retired"
}

export enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageTypeEnum {
    Base = "base"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    Custom = "custom"
}


export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=distribution" })
  distribution?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageDistributionEnum;

  @Metadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=min_disk_size" })
  minDiskSize?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=regions" })
  regions?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageRegionsEnum[];

  @Metadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes?: number;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=status" })
  status?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageTypeEnum;
}


// Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel
/** 
 * **Note**: All Droplets created after March 2017 use internal kernels by default.
 * These Droplets will have this attribute set to `null`.
 * 
 * The current [kernel](https://www.digitalocean.com/docs/droplets/how-to/kernel/)
 * for Droplets with externally managed kernels. This will initially be set to
 * the kernel of the base image when the Droplet is created.
 * 
**/
export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}

export enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4TypeEnum {
    Public = "public"
,    Private = "private"
}


export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=gateway" })
  gateway?: string;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=netmask" })
  netmask?: string;

  @Metadata({ data: "json, name=type" })
  type?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4TypeEnum;
}

export enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6TypeEnum {
    Public = "public"
}


export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=gateway" })
  gateway?: string;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=netmask" })
  netmask?: number;

  @Metadata({ data: "json, name=type" })
  type?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6TypeEnum;
}


// Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks
/** 
 * The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.
**/
export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks extends SpeakeasyBase {
  @Metadata({ data: "json, name=v4", elemType: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4 })
  v4?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4[];

  @Metadata({ data: "json, name=v6", elemType: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6 })
  v6?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6[];
}


// Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow
/** 
 * The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.
**/
export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=start" })
  start?: Date;
}


export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsSize extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=disk" })
  disk: number;

  @Metadata({ data: "json, name=memory" })
  memory: number;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: number;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: number;

  @Metadata({ data: "json, name=regions" })
  regions: string[];

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=transfer" })
  transfer: number;

  @Metadata({ data: "json, name=vcpus" })
  vcpus: number;
}

export enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsStatusEnum {
    New = "new"
,    Active = "active"
,    Off = "off"
,    Archive = "archive"
}


export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup_ids" })
  backupIds: number[];

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=disk" })
  disk: number;

  @Metadata({ data: "json, name=features" })
  features: string[];

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=image" })
  image: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImage;

  @Metadata({ data: "json, name=kernel" })
  kernel: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel;

  @Metadata({ data: "json, name=locked" })
  locked: boolean;

  @Metadata({ data: "json, name=memory" })
  memory: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=networks" })
  networks: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks;

  @Metadata({ data: "json, name=next_backup_window" })
  nextBackupWindow: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow;

  @Metadata({ data: "json, name=region" })
  region: Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion;

  @Metadata({ data: "json, name=size" })
  size: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsSize;

  @Metadata({ data: "json, name=size_slug" })
  sizeSlug: string;

  @Metadata({ data: "json, name=snapshot_ids" })
  snapshotIds: number[];

  @Metadata({ data: "json, name=status" })
  status: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags: string[];

  @Metadata({ data: "json, name=vcpus" })
  vcpus: number;

  @Metadata({ data: "json, name=volume_ids" })
  volumeIds: string[];

  @Metadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}
