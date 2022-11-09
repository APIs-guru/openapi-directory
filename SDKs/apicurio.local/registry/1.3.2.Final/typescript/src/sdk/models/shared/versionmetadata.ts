import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
import { ArtifactTypeEnum } from "./artifacttypeenum";


export class VersionMetaData extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdBy" })
  createdBy: string;

  @Metadata({ data: "json, name=createdOn" })
  createdOn: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=globalId" })
  globalId: number;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=state" })
  state?: ArtifactStateEnum;

  @Metadata({ data: "json, name=type" })
  type: ArtifactTypeEnum;

  @Metadata({ data: "json, name=version" })
  version: number;
}
