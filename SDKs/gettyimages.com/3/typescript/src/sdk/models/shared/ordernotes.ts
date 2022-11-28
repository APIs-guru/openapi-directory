import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderNotes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=licensee_name" })
  licenseeName?: string;

  @SpeakeasyMetadata({ data: "json, name=ordered_by" })
  orderedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=project_title" })
  projectTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=purchase_order_number" })
  purchaseOrderNumber?: string;
}
