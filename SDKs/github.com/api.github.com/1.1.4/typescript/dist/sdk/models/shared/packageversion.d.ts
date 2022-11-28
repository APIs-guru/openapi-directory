import { SpeakeasyBase } from "../../../internal/utils";
export declare class PackageVersionPackageVersionMetadataContainerMetadata extends SpeakeasyBase {
    tags: any[];
}
export declare class PackageVersionPackageVersionMetadataDockerMetadata extends SpeakeasyBase {
    tag?: any[];
}
export declare enum PackageVersionPackageVersionMetadataPackageTypeEnum {
    Npm = "npm",
    Maven = "maven",
    Rubygems = "rubygems",
    Docker = "docker",
    Nuget = "nuget",
    Container = "container"
}
export declare class PackageVersionPackageVersionMetadata extends SpeakeasyBase {
    container?: PackageVersionPackageVersionMetadataContainerMetadata;
    docker?: PackageVersionPackageVersionMetadataDockerMetadata;
    packageType: PackageVersionPackageVersionMetadataPackageTypeEnum;
}
/**
 * A version of a software package
**/
export declare class PackageVersion extends SpeakeasyBase {
    createdAt: Date;
    deletedAt?: Date;
    description?: string;
    htmlUrl?: string;
    id: number;
    license?: string;
    metadata?: PackageVersionPackageVersionMetadata;
    name: string;
    packageHtmlUrl: string;
    updatedAt: Date;
    url: string;
}
