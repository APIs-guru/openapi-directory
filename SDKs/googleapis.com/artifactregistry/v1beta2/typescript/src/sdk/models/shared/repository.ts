import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MavenRepositoryConfig } from "./mavenrepositoryconfig";

export enum RepositoryFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED"
,    Docker = "DOCKER"
,    Maven = "MAVEN"
,    Npm = "NPM"
,    Apt = "APT"
,    Yum = "YUM"
,    Python = "PYTHON"
}


// Repository
/** 
 * A Repository for storing artifacts with a specific format.
**/
export class Repository extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=format" })
  format?: RepositoryFormatEnum;

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=mavenConfig" })
  mavenConfig?: MavenRepositoryConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
