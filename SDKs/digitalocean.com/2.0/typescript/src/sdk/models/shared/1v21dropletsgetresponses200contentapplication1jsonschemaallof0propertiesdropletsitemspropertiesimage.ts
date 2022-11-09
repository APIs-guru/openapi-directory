import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageDistributionEnum {
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

export enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageRegionsEnum {
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

export enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageStatusEnum {
    NewUpper = "NEW"
,    NewLower = "new"
,    Available = "available"
,    Pending = "pending"
,    Deleted = "deleted"
,    Retired = "retired"
}

export enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageTypeEnum {
    Base = "base"
,    Snapshot = "snapshot"
,    Backup = "backup"
,    Custom = "custom"
}


export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=distribution" })
  distribution?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageDistributionEnum;

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
  regions?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageRegionsEnum[];

  @Metadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes?: number;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=status" })
  status?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageTypeEnum;
}
