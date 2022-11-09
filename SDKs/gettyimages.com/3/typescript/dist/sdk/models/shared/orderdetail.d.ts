import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetIdFromOrder } from "./assetidfromorder";
import { OrderNotes } from "./ordernotes";
export declare class OrderDetail extends SpeakeasyBase {
    assets?: AssetIdFromOrder[];
    endClient?: string;
    id?: string;
    invoiceNumber?: string;
    notes?: OrderNotes;
    orderDate?: Date;
}
