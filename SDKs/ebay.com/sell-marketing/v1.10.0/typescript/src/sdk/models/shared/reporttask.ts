import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { InventoryReference } from "./inventoryreference";



// ReportTask
/** 
 * This type defines the fields in a report task.
**/
export class ReportTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignIds" })
  campaignIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=dateFrom" })
  dateFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=dateTo" })
  dateTo?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=inventoryReferences", elemType: InventoryReference })
  inventoryReferences?: InventoryReference[];

  @SpeakeasyMetadata({ data: "json, name=listingIds" })
  listingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=metricKeys" })
  metricKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=reportExpirationDate" })
  reportExpirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=reportFormat" })
  reportFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=reportHref" })
  reportHref?: string;

  @SpeakeasyMetadata({ data: "json, name=reportId" })
  reportId?: string;

  @SpeakeasyMetadata({ data: "json, name=reportName" })
  reportName?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTaskCompletionDate" })
  reportTaskCompletionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTaskCreationDate" })
  reportTaskCreationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTaskExpectedCompletionDate" })
  reportTaskExpectedCompletionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTaskId" })
  reportTaskId?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTaskStatus" })
  reportTaskStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTaskStatusMessage" })
  reportTaskStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=reportType" })
  reportType?: string;
}
