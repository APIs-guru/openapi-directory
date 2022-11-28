import { SpeakeasyBase } from "../../../internal/utils";
import { Modifier } from "./modifier";
export declare class GetModifierResponse extends SpeakeasyBase {
    data: Modifier;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
