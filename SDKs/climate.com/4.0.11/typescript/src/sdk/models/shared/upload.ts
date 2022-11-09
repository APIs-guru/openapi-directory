import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UploadContentTypeEnum {
    ApplicationVndClimateFieldGeojson = "application/vnd.climate.field.geojson"
,    ImageVndClimateThermalGeotiff = "image/vnd.climate.thermal.geotiff"
,    ImageVndClimateNdviGeotiff = "image/vnd.climate.ndvi.geotiff"
,    ImageVndClimateWaterstressGeotiff = "image/vnd.climate.waterstress.geotiff"
,    ImageVndClimateElevationGeotiff = "image/vnd.climate.elevation.geotiff"
,    ImageVndClimateRawGeotiff = "image/vnd.climate.raw.geotiff"
,    ImageVndClimateRgbGeotiff = "image/vnd.climate.rgb.geotiff"
}


// Upload
/** 
 * Client request to upload data for a user.
**/
export class Upload extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType: UploadContentTypeEnum;

  @Metadata({ data: "json, name=length" })
  length: number;

  @Metadata({ data: "json, name=md5" })
  md5: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;
}
