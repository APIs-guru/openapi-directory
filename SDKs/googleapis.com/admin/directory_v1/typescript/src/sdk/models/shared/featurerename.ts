import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FeatureRename extends SpeakeasyBase {
  @Metadata({ data: "json, name=newName" })
  newName?: string;
}
