import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum {
    Droplet = "droplet"
,    Volume = "volume"
}


export class Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=min_disk_size" })
  minDiskSize: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=regions" })
  regions: string[];

  @Metadata({ data: "json, name=resource_id" })
  resourceId: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType: Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum;

  @Metadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;

  @Metadata({ data: "json, name=tags" })
  tags: string[];
}
