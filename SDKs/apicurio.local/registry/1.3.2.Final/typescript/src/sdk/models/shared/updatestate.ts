import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStateEnum } from "./artifactstateenum";



export class UpdateState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state: ArtifactStateEnum;
}
