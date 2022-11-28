import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetLocationsResponse extends SpeakeasyBase {
    data: Location[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
