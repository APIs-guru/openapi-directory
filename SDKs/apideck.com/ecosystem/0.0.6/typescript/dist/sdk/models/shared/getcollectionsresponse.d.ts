import { SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";
export declare class GetCollectionsResponse extends SpeakeasyBase {
    data: Collection[];
    status: string;
    statusCode: number;
}
