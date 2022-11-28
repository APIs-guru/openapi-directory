import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointGeomagIaga2002QueryParams extends SpeakeasyBase {
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
    searchTypePointGeomagIaga2002DataInterval?: string;
    searchTypePointGeomagIaga2002DataType?: string;
    searchTypePointGeomagIaga2002DigitalSampling?: string;
    searchTypePointGeomagIaga2002IagaCode?: string;
    searchTypePointGeomagIaga2002SourceOfData?: string;
    searchTypePointGeomagIaga2002StationName?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointGeomagIaga2002Request extends SpeakeasyBase {
    queryParams: SearchTypePointGeomagIaga2002QueryParams;
}
export declare class SearchTypePointGeomagIaga2002Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
