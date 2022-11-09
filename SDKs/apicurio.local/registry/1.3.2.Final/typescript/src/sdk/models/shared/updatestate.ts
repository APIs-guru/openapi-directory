import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactStateEnum } from "./artifactstateenum";


export class UpdateState extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state: ArtifactStateEnum;
}
