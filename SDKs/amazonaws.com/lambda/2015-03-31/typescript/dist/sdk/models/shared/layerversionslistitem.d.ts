import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeEnum } from "./runtimeenum";
/**
 * Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export declare class LayerVersionsListItem extends SpeakeasyBase {
    compatibleRuntimes?: RuntimeEnum[];
    createdDate?: string;
    description?: string;
    layerVersionArn?: string;
    licenseInfo?: string;
    version?: number;
}
