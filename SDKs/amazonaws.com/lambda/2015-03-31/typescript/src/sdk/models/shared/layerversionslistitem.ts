import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeEnum } from "./runtimeenum";



// LayerVersionsListItem
/** 
 * Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export class LayerVersionsListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompatibleRuntimes" })
  compatibleRuntimes?: RuntimeEnum[];

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LayerVersionArn" })
  layerVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseInfo" })
  licenseInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
