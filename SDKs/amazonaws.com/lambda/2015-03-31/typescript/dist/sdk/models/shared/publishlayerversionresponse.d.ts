import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeEnum } from "./runtimeenum";
import { LayerVersionContentOutput } from "./layerversioncontentoutput";
export declare class PublishLayerVersionResponse extends SpeakeasyBase {
    compatibleRuntimes?: RuntimeEnum[];
    content?: LayerVersionContentOutput;
    createdDate?: string;
    description?: string;
    layerArn?: string;
    layerVersionArn?: string;
    licenseInfo?: string;
    version?: number;
}
