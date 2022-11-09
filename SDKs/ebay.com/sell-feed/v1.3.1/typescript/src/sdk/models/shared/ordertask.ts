import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderFilterCriteria } from "./orderfiltercriteria";
import { UploadSummary } from "./uploadsummary";


// OrderTask
/** 
 * The type that defines the fields for the getOrderTask response.
**/
export class OrderTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionDate" })
  completionDate?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=detailHref" })
  detailHref?: string;

  @Metadata({ data: "json, name=feedType" })
  feedType?: string;

  @Metadata({ data: "json, name=filterCriteria" })
  filterCriteria?: OrderFilterCriteria;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;

  @Metadata({ data: "json, name=uploadSummary" })
  uploadSummary?: UploadSummary;
}
