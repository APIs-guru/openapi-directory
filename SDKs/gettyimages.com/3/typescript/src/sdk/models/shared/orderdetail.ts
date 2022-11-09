import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetIdFromOrder } from "./assetidfromorder";
import { OrderNotes } from "./ordernotes";


export class OrderDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: shared.AssetIdFromOrder })
  assets?: AssetIdFromOrder[];

  @Metadata({ data: "json, name=end_client" })
  endClient?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=invoice_number" })
  invoiceNumber?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: OrderNotes;

  @Metadata({ data: "json, name=order_date" })
  orderDate?: Date;
}
