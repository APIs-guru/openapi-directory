import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";
export declare class ApiResourceLinkedResources extends SpeakeasyBase {
    id?: string;
    unifiedProperty?: string;
}
export declare class ApiResource extends SpeakeasyBase {
    id?: string;
    linkedResources?: ApiResourceLinkedResources[];
    name?: string;
    schema?: Map<string, any>;
    status?: ResourceStatusEnum;
}
