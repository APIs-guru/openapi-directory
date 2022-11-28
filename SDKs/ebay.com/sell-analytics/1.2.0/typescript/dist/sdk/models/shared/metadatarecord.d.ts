import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * A complex type that defines the data records returned in the report.
**/
export declare class MetadataRecord extends SpeakeasyBase {
    metadataValues?: Value[];
    value?: Value;
}
