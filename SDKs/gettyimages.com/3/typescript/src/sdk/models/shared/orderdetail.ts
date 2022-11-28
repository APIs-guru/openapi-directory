import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetIdFromOrder } from "./assetidfromorder";
import { OrderNotes } from "./ordernotes";



export class OrderDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: AssetIdFromOrder })
  assets?: AssetIdFromOrder[];

  @SpeakeasyMetadata({ data: "json, name=end_client" })
  endClient?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_number" })
  invoiceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: OrderNotes;

  @SpeakeasyMetadata({ data: "json, name=order_date" })
  orderDate?: Date;
}
