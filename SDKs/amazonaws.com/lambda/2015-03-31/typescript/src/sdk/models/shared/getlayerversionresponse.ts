import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeEnum } from "./runtimeenum";
import { LayerVersionContentOutput } from "./layerversioncontentoutput";



export class GetLayerVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompatibleRuntimes" })
  compatibleRuntimes?: RuntimeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content?: LayerVersionContentOutput;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LayerArn" })
  layerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LayerVersionArn" })
  layerVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseInfo" })
  licenseInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
