import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSettingsChangesQueryParams extends SpeakeasyBase {
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
export declare class GetSettingsChangesRequest extends SpeakeasyBase {
    queryParams: GetSettingsChangesQueryParams;
}
export declare class GetSettingsChangesResponse extends SpeakeasyBase {
    contentType: string;
    settingsChangeEntities?: shared.SettingsChangeEntity[];
    statusCode: number;
}
