import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointSortKeyEnum } from "./endpointsortkeyenum";
import { OrderKeyEnum } from "./orderkeyenum";
import { EndpointStatusEnum } from "./endpointstatusenum";
export declare class ListEndpointsInput extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: EndpointSortKeyEnum;
    sortOrder?: OrderKeyEnum;
    statusEquals?: EndpointStatusEnum;
}
