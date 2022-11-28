import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointConfigSortKeyEnum } from "./endpointconfigsortkeyenum";
import { OrderKeyEnum } from "./orderkeyenum";
export declare class ListEndpointConfigsInput extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: EndpointConfigSortKeyEnum;
    sortOrder?: OrderKeyEnum;
}
