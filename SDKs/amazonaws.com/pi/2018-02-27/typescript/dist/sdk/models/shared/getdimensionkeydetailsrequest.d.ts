import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceTypeEnum } from "./servicetypeenum";
export declare class GetDimensionKeyDetailsRequest extends SpeakeasyBase {
    group: string;
    groupIdentifier: string;
    identifier: string;
    requestedDimensions?: string[];
    serviceType: ServiceTypeEnum;
}
