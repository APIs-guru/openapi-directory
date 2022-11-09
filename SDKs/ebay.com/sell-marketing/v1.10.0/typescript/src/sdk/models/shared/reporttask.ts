import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";
import { InventoryReference } from "./inventoryreference";


// ReportTask
/** 
 * This type defines the fields in a report task.
**/
export class ReportTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignIds" })
  campaignIds?: string[];

  @Metadata({ data: "json, name=dateFrom" })
  dateFrom?: string;

  @Metadata({ data: "json, name=dateTo" })
  dateTo?: string;

  @Metadata({ data: "json, name=dimensions", elemType: shared.Dimension })
  dimensions?: Dimension[];

  @Metadata({ data: "json, name=inventoryReferences", elemType: shared.InventoryReference })
  inventoryReferences?: InventoryReference[];

  @Metadata({ data: "json, name=listingIds" })
  listingIds?: string[];

  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @Metadata({ data: "json, name=metricKeys" })
  metricKeys?: string[];

  @Metadata({ data: "json, name=reportExpirationDate" })
  reportExpirationDate?: string;

  @Metadata({ data: "json, name=reportFormat" })
  reportFormat?: string;

  @Metadata({ data: "json, name=reportHref" })
  reportHref?: string;

  @Metadata({ data: "json, name=reportId" })
  reportId?: string;

  @Metadata({ data: "json, name=reportName" })
  reportName?: string;

  @Metadata({ data: "json, name=reportTaskCompletionDate" })
  reportTaskCompletionDate?: string;

  @Metadata({ data: "json, name=reportTaskCreationDate" })
  reportTaskCreationDate?: string;

  @Metadata({ data: "json, name=reportTaskExpectedCompletionDate" })
  reportTaskExpectedCompletionDate?: string;

  @Metadata({ data: "json, name=reportTaskId" })
  reportTaskId?: string;

  @Metadata({ data: "json, name=reportTaskStatus" })
  reportTaskStatus?: string;

  @Metadata({ data: "json, name=reportTaskStatusMessage" })
  reportTaskStatusMessage?: string;

  @Metadata({ data: "json, name=reportType" })
  reportType?: string;
}
