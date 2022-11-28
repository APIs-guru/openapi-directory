import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExternalEventsQueryParams extends SpeakeasyBase {
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
export declare class GetExternalEventsRequest extends SpeakeasyBase {
    queryParams: GetExternalEventsQueryParams;
}
export declare class GetExternalEventsResponse extends SpeakeasyBase {
    contentType: string;
    externalEventEntities?: shared.ExternalEventEntity[];
    statusCode: number;
}
