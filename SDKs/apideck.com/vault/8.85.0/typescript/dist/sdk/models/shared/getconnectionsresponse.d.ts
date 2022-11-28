import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
export declare class GetConnectionsResponse extends SpeakeasyBase {
    data: Connection[];
    status: string;
    statusCode: number;
}
