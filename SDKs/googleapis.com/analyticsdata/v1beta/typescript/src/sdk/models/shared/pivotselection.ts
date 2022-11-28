import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PivotSelection
/** 
 * A pair of dimension names and values. Rows with this dimension pivot pair are ordered by the metric's value. For example if pivots = {{"browser", "Chrome"}} and metric_name = "Sessions", then the rows will be sorted based on Sessions in Chrome. ---------|----------|----------------|----------|---------------- | Chrome | Chrome | Safari | Safari ---------|----------|----------------|----------|---------------- Country | Sessions | Pages/Sessions | Sessions | Pages/Sessions ---------|----------|----------------|----------|---------------- US | 2 | 2 | 3 | 1 ---------|----------|----------------|----------|---------------- Canada | 3 | 1 | 4 | 1 ---------|----------|----------------|----------|----------------
**/
export class PivotSelection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensionValue" })
  dimensionValue?: string;
}
