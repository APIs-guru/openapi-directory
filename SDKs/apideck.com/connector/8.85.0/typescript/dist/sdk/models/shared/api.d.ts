import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { ApiStatusEnum } from "./apistatusenum";
export declare class ApiResources extends SpeakeasyBase {
    excludedFromCoverage?: boolean;
    id?: string;
    name?: string;
    status?: ResourceStatusEnum;
}
export declare enum ApiTypeEnum {
    Platform = "platform",
    Unified = "unified"
}
export declare class Api extends SpeakeasyBase {
    apiReferenceUrl?: string;
    categories?: string[];
    description?: string;
    events?: string[];
    id?: string;
    name?: string;
    postmanCollectionId?: string;
    resources?: ApiResources[];
    specUrl?: string;
    status?: ApiStatusEnum;
    type?: ApiTypeEnum;
}
