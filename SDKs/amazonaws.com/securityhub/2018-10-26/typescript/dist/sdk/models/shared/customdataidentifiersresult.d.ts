import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDataIdentifiersDetections } from "./customdataidentifiersdetections";
/**
 * Contains an instance of sensitive data that was detected by a customer-defined identifier.
**/
export declare class CustomDataIdentifiersResult extends SpeakeasyBase {
    detections?: CustomDataIdentifiersDetections[];
    totalCount?: number;
}
