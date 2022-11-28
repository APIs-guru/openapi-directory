import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderFilterCriteria } from "./orderfiltercriteria";
import { UploadSummary } from "./uploadsummary";



// OrderTask
/** 
 * The type that defines the fields for the getOrderTask response.
**/
export class OrderTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionDate" })
  completionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=detailHref" })
  detailHref?: string;

  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType?: string;

  @SpeakeasyMetadata({ data: "json, name=filterCriteria" })
  filterCriteria?: OrderFilterCriteria;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadSummary" })
  uploadSummary?: UploadSummary;
}
