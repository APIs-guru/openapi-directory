import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum {
    Snapshot = "snapshot"
,    Backup = "backup"
}


export class Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=min_disk_size" })
  minDiskSize: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=regions" })
  regions: string[];

  @Metadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;

  @Metadata({ data: "json, name=type" })
  type: Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum;
}
