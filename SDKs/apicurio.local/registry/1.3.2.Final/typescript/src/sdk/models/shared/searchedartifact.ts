import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
import { ArtifactTypeEnum } from "./artifacttypeenum";



// SearchedArtifact
/** 
 * Models a single artifact from the result set returned when searching for artifacts.
**/
export class SearchedArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=modifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: ArtifactStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ArtifactTypeEnum;
}
