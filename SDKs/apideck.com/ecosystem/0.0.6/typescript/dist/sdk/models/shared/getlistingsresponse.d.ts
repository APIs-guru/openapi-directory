import { SpeakeasyBase } from "../../../internal/utils";
import { Listing } from "./listing";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetListingsResponse extends SpeakeasyBase {
    data: Listing[];
    links?: Links;
    meta?: Meta;
    status: string;
    statusCode: number;
}
