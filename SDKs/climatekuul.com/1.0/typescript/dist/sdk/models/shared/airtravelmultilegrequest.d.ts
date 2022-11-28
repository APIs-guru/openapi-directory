import { SpeakeasyBase } from "../../../internal/utils";
import { Leg1 } from "./leg1";
export declare class AirtravelMultilegRequest extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    contactEmail: string;
    contactFirstName: string;
    contactLastName: string;
    leg1: Leg1;
    leg2: Leg1;
    leg3: Leg1;
    legsCount: string;
    numberOfPassengers: string;
    travelMode: string;
}
