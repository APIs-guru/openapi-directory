import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorProto } from "./errorproto";
export declare class TableDataInsertAllResponseInsertErrors extends SpeakeasyBase {
    errors?: ErrorProto[];
    index?: number;
}
export declare class TableDataInsertAllResponse extends SpeakeasyBase {
    insertErrors?: TableDataInsertAllResponseInsertErrors[];
    kind?: string;
}
