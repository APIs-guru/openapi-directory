import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PackageVersionPackageVersionMetadataContainerMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags: any[];
}


export class PackageVersionPackageVersionMetadataDockerMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag?: any[];
}

export enum PackageVersionPackageVersionMetadataPackageTypeEnum {
    Npm = "npm"
,    Maven = "maven"
,    Rubygems = "rubygems"
,    Docker = "docker"
,    Nuget = "nuget"
,    Container = "container"
}


export class PackageVersionPackageVersionMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=container" })
  container?: PackageVersionPackageVersionMetadataContainerMetadata;

  @Metadata({ data: "json, name=docker" })
  docker?: PackageVersionPackageVersionMetadataDockerMetadata;

  @Metadata({ data: "json, name=package_type" })
  packageType: PackageVersionPackageVersionMetadataPackageTypeEnum;
}


// PackageVersion
/** 
 * A version of a software package
**/
export class PackageVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=deleted_at" })
  deletedAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=license" })
  license?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: PackageVersionPackageVersionMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=package_html_url" })
  packageHtmlUrl: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
