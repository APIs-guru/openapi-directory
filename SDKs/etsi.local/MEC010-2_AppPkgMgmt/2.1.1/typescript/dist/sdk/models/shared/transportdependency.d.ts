import { SpeakeasyBase } from "../../../internal/utils";
import { TransportDescriptor } from "./transportdescriptor";
export declare class TransportDependency extends SpeakeasyBase {
    labels: string[];
    serializers: string[];
    transport: TransportDescriptor;
}
