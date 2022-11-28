import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeLocationEnum } from "./computelocationenum";
import { ForwardingConfig } from "./forwardingconfig";
/**
 * The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud.
**/
export declare class TransformProcessingConfig extends SpeakeasyBase {
    computeLocation: ComputeLocationEnum;
    forwardingConfig?: ForwardingConfig;
}
