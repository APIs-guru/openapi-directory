import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { InventoryReference } from "./inventoryreference";



// CreateReportTask
/** 
 * This type defines the rules that govern the generation of a report task and the criteria that's used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see Reading Promoted Listings reports.
**/
export class CreateReportTask extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=reportFormat" })
  reportFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=reportType" })
  reportType?: string;
}
