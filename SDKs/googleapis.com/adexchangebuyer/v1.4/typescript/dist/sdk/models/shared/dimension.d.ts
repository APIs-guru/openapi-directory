import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionDimensionValue } from "./dimensiondimensionvalue";
/**
 * This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]}
**/
export declare class Dimension extends SpeakeasyBase {
    dimensionType?: string;
    dimensionValues?: DimensionDimensionValue[];
}
