import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UploadContentTypeEnum {
    ApplicationVndClimateFieldGeojson = "application/vnd.climate.field.geojson",
    ImageVndClimateThermalGeotiff = "image/vnd.climate.thermal.geotiff",
    ImageVndClimateNdviGeotiff = "image/vnd.climate.ndvi.geotiff",
    ImageVndClimateWaterstressGeotiff = "image/vnd.climate.waterstress.geotiff",
    ImageVndClimateElevationGeotiff = "image/vnd.climate.elevation.geotiff",
    ImageVndClimateRawGeotiff = "image/vnd.climate.raw.geotiff",
    ImageVndClimateRgbGeotiff = "image/vnd.climate.rgb.geotiff"
}
/**
 * Client request to upload data for a user.
**/
export declare class Upload extends SpeakeasyBase {
    contentType: UploadContentTypeEnum;
    length: number;
    md5: string;
    metadata?: Map<string, any>;
}
