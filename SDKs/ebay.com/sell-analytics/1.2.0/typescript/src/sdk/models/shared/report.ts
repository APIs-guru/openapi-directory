import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Header } from "./header";
import { Record } from "./record";
import { Error } from "./error";



// Report
/** 
 * The complex type that defines that defines the report.
**/
export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionMetadata", elemType: Metadata })
  dimensionMetadata?: Metadata[];

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Header;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: Record })
  records?: Record[];

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error })
  warnings?: Error[];
}
