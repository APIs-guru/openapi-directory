import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAllDropletsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag_name" })
  tagName?: string;
}


export class ListAllDropletsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAllDropletsQueryParams;
}

export enum ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum {
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

export enum ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum {
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

export enum ListAllDroplets200ApplicationJsonDropletsImageStatusEnum {
    NewUpper = "NEW"
,    NewLower = "new"
,    Available = "available"
,    Pending = "pending"
,    Deleted = "deleted"
,    Retired = "retired"
}

export enum ListAllDroplets200ApplicationJsonDropletsImageTypeEnum {
    Base = "base"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    Custom = "custom"
}


export class ListAllDroplets200ApplicationJsonDropletsImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=distribution" })
  distribution?: ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum;

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
  regions?: ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum[];

  @Metadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes?: number;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=status" })
  status?: ListAllDroplets200ApplicationJsonDropletsImageStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: ListAllDroplets200ApplicationJsonDropletsImageTypeEnum;
}


// ListAllDroplets200ApplicationJsonDropletsKernel
/** 
 * **Note**: All Droplets created after March 2017 use internal kernels by default.
 * These Droplets will have this attribute set to `null`.
 * 
 * The current [kernel](https://www.digitalocean.com/docs/droplets/how-to/kernel/)
 * for Droplets with externally managed kernels. This will initially be set to
 * the kernel of the base image when the Droplet is created.
 * 
**/
export class ListAllDroplets200ApplicationJsonDropletsKernel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}

export enum ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum {
    Public = "public"
,    Private = "private"
}


export class ListAllDroplets200ApplicationJsonDropletsNetworksV4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=gateway" })
  gateway?: string;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=netmask" })
  netmask?: string;

  @Metadata({ data: "json, name=type" })
  type?: ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum;
}

export enum ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum {
    Public = "public"
}


export class ListAllDroplets200ApplicationJsonDropletsNetworksV6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=gateway" })
  gateway?: string;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=netmask" })
  netmask?: number;

  @Metadata({ data: "json, name=type" })
  type?: ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum;
}


// ListAllDroplets200ApplicationJsonDropletsNetworks
/** 
 * The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.
**/
export class ListAllDroplets200ApplicationJsonDropletsNetworks extends SpeakeasyBase {
  @Metadata({ data: "json, name=v4", elemType: operations.ListAllDroplets200ApplicationJsonDropletsNetworksV4 })
  v4?: ListAllDroplets200ApplicationJsonDropletsNetworksV4[];

  @Metadata({ data: "json, name=v6", elemType: operations.ListAllDroplets200ApplicationJsonDropletsNetworksV6 })
  v6?: ListAllDroplets200ApplicationJsonDropletsNetworksV6[];
}


// ListAllDroplets200ApplicationJsonDropletsNextBackupWindow
/** 
 * The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.
**/
export class ListAllDroplets200ApplicationJsonDropletsNextBackupWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=start" })
  start?: Date;
}


export class ListAllDroplets200ApplicationJsonDropletsSize extends SpeakeasyBase {
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

export enum ListAllDroplets200ApplicationJsonDropletsStatusEnum {
    New = "new"
,    Active = "active"
,    Off = "off"
,    Archive = "archive"
}


export class ListAllDroplets200ApplicationJsonDroplets extends SpeakeasyBase {
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
  image: ListAllDroplets200ApplicationJsonDropletsImage;

  @Metadata({ data: "json, name=kernel" })
  kernel: ListAllDroplets200ApplicationJsonDropletsKernel;

  @Metadata({ data: "json, name=locked" })
  locked: boolean;

  @Metadata({ data: "json, name=memory" })
  memory: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=networks" })
  networks: ListAllDroplets200ApplicationJsonDropletsNetworks;

  @Metadata({ data: "json, name=next_backup_window" })
  nextBackupWindow: ListAllDroplets200ApplicationJsonDropletsNextBackupWindow;

  @Metadata({ data: "json, name=region" })
  region: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion;

  @Metadata({ data: "json, name=size" })
  size: ListAllDroplets200ApplicationJsonDropletsSize;

  @Metadata({ data: "json, name=size_slug" })
  sizeSlug: string;

  @Metadata({ data: "json, name=snapshot_ids" })
  snapshotIds: number[];

  @Metadata({ data: "json, name=status" })
  status: ListAllDroplets200ApplicationJsonDropletsStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags: string[];

  @Metadata({ data: "json, name=vcpus" })
  vcpus: number;

  @Metadata({ data: "json, name=volume_ids" })
  volumeIds: string[];

  @Metadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}


export class ListAllDroplets200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllDroplets200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllDroplets200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllDroplets200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllDroplets200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListAllDroplets200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplets", elemType: operations.ListAllDroplets200ApplicationJsonDroplets })
  droplets?: ListAllDroplets200ApplicationJsonDroplets[];

  @Metadata({ data: "json, name=links" })
  links?: ListAllDroplets200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListAllDroplets200ApplicationJsonMeta;
}


export class ListAllDroplets401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllDropletsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllDroplets200ApplicationJsonObject?: ListAllDroplets200ApplicationJson;

  @Metadata()
  listAllDroplets401ApplicationJsonObject?: ListAllDroplets401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
