import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PackageVersionPackageVersionMetadataContainerMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: any[];
}


export class PackageVersionPackageVersionMetadataDockerMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: any[];
}

export enum PackageVersionPackageVersionMetadataPackageTypeEnum {
    Npm = "npm",
    Maven = "maven",
    Rubygems = "rubygems",
    Docker = "docker",
    Nuget = "nuget",
    Container = "container"
}


export class PackageVersionPackageVersionMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: PackageVersionPackageVersionMetadataContainerMetadata;

  @SpeakeasyMetadata({ data: "json, name=docker" })
  docker?: PackageVersionPackageVersionMetadataDockerMetadata;

  @SpeakeasyMetadata({ data: "json, name=package_type" })
  packageType: PackageVersionPackageVersionMetadataPackageTypeEnum;
}


// PackageVersion
/** 
 * A version of a software package
**/
export class PackageVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted_at" })
  deletedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PackageVersionPackageVersionMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=package_html_url" })
  packageHtmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
