import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A pair of dimension names and values. Rows with this dimension pivot pair are ordered by the metric's value. For example if pivots = {{"browser", "Chrome"}} and metric_name = "Sessions", then the rows will be sorted based on Sessions in Chrome. ---------|----------|----------------|----------|---------------- | Chrome | Chrome | Safari | Safari ---------|----------|----------------|----------|---------------- Country | Sessions | Pages/Sessions | Sessions | Pages/Sessions ---------|----------|----------------|----------|---------------- US | 2 | 2 | 3 | 1 ---------|----------|----------------|----------|---------------- Canada | 3 | 1 | 4 | 1 ---------|----------|----------------|----------|----------------
**/
export declare class PivotSelection extends SpeakeasyBase {
    dimensionName?: string;
    dimensionValue?: string;
}
