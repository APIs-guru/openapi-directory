import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Build
/** 
 * Describes the Car specification
**/
export class Build extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antibrake_sys" })
  antibrakeSys?: string;

  @SpeakeasyMetadata({ data: "json, name=body_subtype" })
  bodySubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=body_type" })
  bodyType?: string;

  @SpeakeasyMetadata({ data: "json, name=city_miles" })
  cityMiles?: string;

  @SpeakeasyMetadata({ data: "json, name=cylinders" })
  cylinders?: number;

  @SpeakeasyMetadata({ data: "json, name=doors" })
  doors?: number;

  @SpeakeasyMetadata({ data: "json, name=drivetrain" })
  drivetrain?: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=engine_aspiration" })
  engineAspiration?: string;

  @SpeakeasyMetadata({ data: "json, name=engine_block" })
  engineBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=engine_measure" })
  engineMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=engine_size" })
  engineSize?: number;

  @SpeakeasyMetadata({ data: "json, name=fuel_type" })
  fuelType?: string;

  @SpeakeasyMetadata({ data: "json, name=highway_miles" })
  highwayMiles?: string;

  @SpeakeasyMetadata({ data: "json, name=made_in" })
  madeIn?: string;

  @SpeakeasyMetadata({ data: "json, name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=opt_seating" })
  optSeating?: string;

  @SpeakeasyMetadata({ data: "json, name=overall_height" })
  overallHeight?: string;

  @SpeakeasyMetadata({ data: "json, name=overall_length" })
  overallLength?: string;

  @SpeakeasyMetadata({ data: "json, name=overall_width" })
  overallWidth?: string;

  @SpeakeasyMetadata({ data: "json, name=short_trim" })
  shortTrim?: string;

  @SpeakeasyMetadata({ data: "json, name=std_seating" })
  stdSeating?: string;

  @SpeakeasyMetadata({ data: "json, name=steering_type" })
  steeringType?: string;

  @SpeakeasyMetadata({ data: "json, name=tank_size" })
  tankSize?: string;

  @SpeakeasyMetadata({ data: "json, name=transmission" })
  transmission?: string;

  @SpeakeasyMetadata({ data: "json, name=trim" })
  trim?: string;

  @SpeakeasyMetadata({ data: "json, name=trim_r" })
  trimR?: string;

  @SpeakeasyMetadata({ data: "json, name=vehicle_type" })
  vehicleType?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
