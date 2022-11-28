import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchColoradoWaterRightsQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbColoradoWaterRightsAdjudicationDate?: string;
    searchDbColoradoWaterRightsAppropriationDate?: string;
    searchDbColoradoWaterRightsComments?: string;
    searchDbColoradoWaterRightsCounty?: string;
    searchDbColoradoWaterRightsDecreedUnits?: string;
    searchDbColoradoWaterRightsDecreedUses?: string;
    searchDbColoradoWaterRightsLocation?: string;
    searchDbColoradoWaterRightsMoreInformation?: string;
    searchDbColoradoWaterRightsNetAbsolute?: number;
    searchDbColoradoWaterRightsNetApexAbsolute?: number;
    searchDbColoradoWaterRightsNetApexConditional?: number;
    searchDbColoradoWaterRightsNetConditional?: number;
    searchDbColoradoWaterRightsPriorityNo?: string;
    searchDbColoradoWaterRightsSeasonalLimits?: string;
    searchDbColoradoWaterRightsStructureName?: string;
    searchDbColoradoWaterRightsStructureType?: string;
    searchDbColoradoWaterRightsWaterSource?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchColoradoWaterRightsRequest extends SpeakeasyBase {
    queryParams: SearchColoradoWaterRightsQueryParams;
}
export declare class SearchColoradoWaterRightsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
