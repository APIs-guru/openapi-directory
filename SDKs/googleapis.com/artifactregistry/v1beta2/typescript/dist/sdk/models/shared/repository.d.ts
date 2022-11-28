import { SpeakeasyBase } from "../../../internal/utils";
import { MavenRepositoryConfig } from "./mavenrepositoryconfig";
export declare enum RepositoryFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Docker = "DOCKER",
    Maven = "MAVEN",
    Npm = "NPM",
    Apt = "APT",
    Yum = "YUM",
    Python = "PYTHON"
}
/**
 * A Repository for storing artifacts with a specific format.
**/
export declare class RepositoryInput extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    format?: RepositoryFormatEnum;
    kmsKeyName?: string;
    labels?: Map<string, string>;
    mavenConfig?: MavenRepositoryConfig;
    name?: string;
    updateTime?: string;
}
/**
 * A Repository for storing artifacts with a specific format.
**/
export declare class Repository extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    format?: RepositoryFormatEnum;
    kmsKeyName?: string;
    labels?: Map<string, string>;
    mavenConfig?: MavenRepositoryConfig;
    name?: string;
    satisfiesPzs?: boolean;
    sizeBytes?: string;
    updateTime?: string;
}
