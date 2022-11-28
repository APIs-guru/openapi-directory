import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * previous build
**/
export declare class PreviousBuild extends SpeakeasyBase {
    buildNum?: number;
    buildTimeMillis?: number;
    status?: StatusEnum;
}
