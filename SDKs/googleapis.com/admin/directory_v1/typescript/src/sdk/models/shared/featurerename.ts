import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FeatureRename extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newName" })
  newName?: string;
}
