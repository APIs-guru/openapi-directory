import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAutomationsQueryParams extends SpeakeasyBase {
    automation?: string;
    cursor?: string;
    filter?: Map<string, any>;
    filterGt?: Map<string, any>;
    filterGteq?: Map<string, any>;
    filterLike?: Map<string, any>;
    filterLt?: Map<string, any>;
    filterLteq?: Map<string, any>;
    perPage?: number;
    sortBy?: Map<string, any>;
}
export declare class GetAutomationsRequest extends SpeakeasyBase {
    queryParams: GetAutomationsQueryParams;
}
export declare class GetAutomationsResponse extends SpeakeasyBase {
    automationEntities?: shared.AutomationEntity[];
    contentType: string;
    statusCode: number;
}
