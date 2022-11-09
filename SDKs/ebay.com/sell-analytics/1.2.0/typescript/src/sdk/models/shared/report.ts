import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metadata } from "./metadata";
import { Header } from "./header";
import { Record } from "./record";
import { Error } from "./error";


// Report
/** 
 * The complex type that defines that defines the report.
**/
export class Report extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionMetadata", elemType: shared.Metadata })
  dimensionMetadata?: Metadata[];

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=header" })
  header?: Header;

  @Metadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: string;

  @Metadata({ data: "json, name=records", elemType: shared.Record })
  records?: Record[];

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}
