import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CorrelationStats } from "./correlationstats";


// TablesDatasetMetadata
/** 
 * Metadata for a dataset used for AutoML Tables.
**/
export class TablesDatasetMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=mlUseColumnSpecId" })
  mlUseColumnSpecId?: string;

  @Metadata({ data: "json, name=primaryTableSpecId" })
  primaryTableSpecId?: string;

  @Metadata({ data: "json, name=statsUpdateTime" })
  statsUpdateTime?: string;

  @Metadata({ data: "json, name=targetColumnCorrelations", elemType: shared.CorrelationStats })
  targetColumnCorrelations?: Map<string, CorrelationStats>;

  @Metadata({ data: "json, name=targetColumnSpecId" })
  targetColumnSpecId?: string;

  @Metadata({ data: "json, name=weightColumnSpecId" })
  weightColumnSpecId?: string;
}
