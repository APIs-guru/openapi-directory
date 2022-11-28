import { SpeakeasyBase } from "../../../internal/utils";
import { Definition } from "./definition";
/**
 * Type that defines the headers for the dimension keys and metrics returned in the report.
**/
export declare class Header extends SpeakeasyBase {
    dimensionKeys?: Definition[];
    metrics?: Definition[];
}
