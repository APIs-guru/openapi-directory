import { SpeakeasyBase } from "../../../internal/utils";
import { Modifier } from "./modifier";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetModifiersResponse extends SpeakeasyBase {
    data: Modifier[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
