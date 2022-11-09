import { SpeakeasyBase } from "../../../internal/utils/utils";
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
export declare class Repository extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    format?: RepositoryFormatEnum;
    kmsKeyName?: string;
    labels?: Map<string, string>;
    name?: string;
    sizeBytes?: string;
    updateTime?: string;
}
