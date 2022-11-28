import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnsampledReport } from "./unsampledreport";



// UnsampledReports
/** 
 * An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.
**/
export class UnsampledReports extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: UnsampledReport })
  items?: UnsampledReport[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
