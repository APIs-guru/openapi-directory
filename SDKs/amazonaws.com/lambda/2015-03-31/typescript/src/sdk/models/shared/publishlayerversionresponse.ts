import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeEnum } from "./runtimeenum";
import { LayerVersionContentOutput } from "./layerversioncontentoutput";


export class PublishLayerVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompatibleRuntimes" })
  compatibleRuntimes?: RuntimeEnum[];

  @Metadata({ data: "json, name=Content" })
  content?: LayerVersionContentOutput;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LayerArn" })
  layerArn?: string;

  @Metadata({ data: "json, name=LayerVersionArn" })
  layerVersionArn?: string;

  @Metadata({ data: "json, name=LicenseInfo" })
  licenseInfo?: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
