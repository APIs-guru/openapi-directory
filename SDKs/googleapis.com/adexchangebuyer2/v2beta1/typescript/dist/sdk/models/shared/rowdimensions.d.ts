import { SpeakeasyBase } from "../../../internal/utils";
import { TimeInterval } from "./timeinterval";
/**
 * A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
**/
export declare class RowDimensions extends SpeakeasyBase {
    publisherIdentifier?: string;
    timeInterval?: TimeInterval;
}
