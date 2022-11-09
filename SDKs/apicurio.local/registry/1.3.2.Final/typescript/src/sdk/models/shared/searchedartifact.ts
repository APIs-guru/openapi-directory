import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
import { ArtifactTypeEnum } from "./artifacttypeenum";


// SearchedArtifact
/** 
 * Models a single artifact from the result set returned when searching for artifacts.
**/
export class SearchedArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdBy" })
  createdBy: string;

  @Metadata({ data: "json, name=createdOn" })
  createdOn: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=modifiedBy" })
  modifiedBy?: string;

  @Metadata({ data: "json, name=modifiedOn" })
  modifiedOn?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state: ArtifactStateEnum;

  @Metadata({ data: "json, name=type" })
  type: ArtifactTypeEnum;
}
