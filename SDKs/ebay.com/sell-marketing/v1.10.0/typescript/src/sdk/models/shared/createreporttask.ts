import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";
import { InventoryReference } from "./inventoryreference";


// CreateReportTask
/** 
 * This type defines the rules that govern the generation of a report task and the criteria that's used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see Reading Promoted Listings reports.
**/
export class CreateReportTask extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=reportFormat" })
  reportFormat?: string;

  @Metadata({ data: "json, name=reportType" })
  reportType?: string;
}
