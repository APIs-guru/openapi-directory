import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderNotes extends SpeakeasyBase {
  @Metadata({ data: "json, name=licensee_name" })
  licenseeName?: string;

  @Metadata({ data: "json, name=ordered_by" })
  orderedBy?: string;

  @Metadata({ data: "json, name=project_title" })
  projectTitle?: string;

  @Metadata({ data: "json, name=purchase_order_number" })
  purchaseOrderNumber?: string;
}
