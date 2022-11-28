import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CorrelationStats } from "./correlationstats";



// TablesDatasetMetadata
/** 
 * Metadata for a dataset used for AutoML Tables.
**/
export class TablesDatasetMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mlUseColumnSpecId" })
  mlUseColumnSpecId?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryTableSpecId" })
  primaryTableSpecId?: string;

  @SpeakeasyMetadata({ data: "json, name=statsUpdateTime" })
  statsUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=targetColumnCorrelations", elemType: CorrelationStats })
  targetColumnCorrelations?: Map<string, CorrelationStats>;

  @SpeakeasyMetadata({ data: "json, name=targetColumnSpecId" })
  targetColumnSpecId?: string;

  @SpeakeasyMetadata({ data: "json, name=weightColumnSpecId" })
  weightColumnSpecId?: string;
}
