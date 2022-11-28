import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateEndpointInput extends SpeakeasyBase {
    endpointConfigName: string;
    endpointName: string;
    tags?: Tag[];
}
