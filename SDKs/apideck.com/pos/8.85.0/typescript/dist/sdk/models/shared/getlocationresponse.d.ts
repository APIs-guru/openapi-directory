import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
export declare class GetLocationResponse extends SpeakeasyBase {
    data: Location;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
