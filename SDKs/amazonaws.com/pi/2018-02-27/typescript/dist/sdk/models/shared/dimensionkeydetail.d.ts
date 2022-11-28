import { SpeakeasyBase } from "../../../internal/utils";
import { DetailStatusEnum } from "./detailstatusenum";
/**
 * An object that describes the details for a specified dimension.
**/
export declare class DimensionKeyDetail extends SpeakeasyBase {
    dimension?: string;
    status?: DetailStatusEnum;
    value?: string;
}
