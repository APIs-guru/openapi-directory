import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeEnum } from "./runtimeenum";


// LayerVersionsListItem
/** 
 * Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export class LayerVersionsListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompatibleRuntimes" })
  compatibleRuntimes?: RuntimeEnum[];

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LayerVersionArn" })
  layerVersionArn?: string;

  @Metadata({ data: "json, name=LicenseInfo" })
  licenseInfo?: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
