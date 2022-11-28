import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MavenRepositoryConfig } from "./mavenrepositoryconfig";


export enum RepositoryFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Docker = "DOCKER",
    Maven = "MAVEN",
    Npm = "NPM",
    Apt = "APT",
    Yum = "YUM",
    Python = "PYTHON",
    Kfp = "KFP"
}


// RepositoryInput
/** 
 * A Repository for storing artifacts with a specific format.
**/
export class RepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: RepositoryFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mavenConfig" })
  mavenConfig?: MavenRepositoryConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// Repository
/** 
 * A Repository for storing artifacts with a specific format.
**/
export class Repository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: RepositoryFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mavenConfig" })
  mavenConfig?: MavenRepositoryConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
