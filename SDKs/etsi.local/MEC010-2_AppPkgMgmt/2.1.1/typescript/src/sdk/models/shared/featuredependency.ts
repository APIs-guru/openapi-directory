import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FeatureDependency extends SpeakeasyBase {
  @SpeakeasyMetadata()
  featureName: string;

  @SpeakeasyMetadata()
  version: string;
}
