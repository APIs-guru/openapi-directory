import { SpeakeasyBase } from "../../../internal/utils";
import { ButtonActionEnum } from "./buttonactionenum";
/**
 * Default button configuration.
**/
export declare class DefaultButtonConfiguration extends SpeakeasyBase {
    backgroundColor?: string;
    borderRadius?: number;
    buttonAction: ButtonActionEnum;
    link?: string;
    text: string;
    textColor?: string;
}
