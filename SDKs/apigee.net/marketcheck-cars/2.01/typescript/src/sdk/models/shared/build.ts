import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Build
/** 
 * Describes the Car specification
**/
export class Build extends SpeakeasyBase {
  @Metadata({ data: "json, name=antibrake_sys" })
  antibrakeSys?: string;

  @Metadata({ data: "json, name=body_subtype" })
  bodySubtype?: string;

  @Metadata({ data: "json, name=body_type" })
  bodyType?: string;

  @Metadata({ data: "json, name=city_miles" })
  cityMiles?: string;

  @Metadata({ data: "json, name=cylinders" })
  cylinders?: number;

  @Metadata({ data: "json, name=doors" })
  doors?: number;

  @Metadata({ data: "json, name=drivetrain" })
  drivetrain?: string;

  @Metadata({ data: "json, name=engine" })
  engine?: string;

  @Metadata({ data: "json, name=engine_aspiration" })
  engineAspiration?: string;

  @Metadata({ data: "json, name=engine_block" })
  engineBlock?: string;

  @Metadata({ data: "json, name=engine_measure" })
  engineMeasure?: string;

  @Metadata({ data: "json, name=engine_size" })
  engineSize?: number;

  @Metadata({ data: "json, name=fuel_type" })
  fuelType?: string;

  @Metadata({ data: "json, name=highway_miles" })
  highwayMiles?: string;

  @Metadata({ data: "json, name=made_in" })
  madeIn?: string;

  @Metadata({ data: "json, name=make" })
  make?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=opt_seating" })
  optSeating?: string;

  @Metadata({ data: "json, name=overall_height" })
  overallHeight?: string;

  @Metadata({ data: "json, name=overall_length" })
  overallLength?: string;

  @Metadata({ data: "json, name=overall_width" })
  overallWidth?: string;

  @Metadata({ data: "json, name=short_trim" })
  shortTrim?: string;

  @Metadata({ data: "json, name=std_seating" })
  stdSeating?: string;

  @Metadata({ data: "json, name=steering_type" })
  steeringType?: string;

  @Metadata({ data: "json, name=tank_size" })
  tankSize?: string;

  @Metadata({ data: "json, name=transmission" })
  transmission?: string;

  @Metadata({ data: "json, name=trim" })
  trim?: string;

  @Metadata({ data: "json, name=trim_r" })
  trimR?: string;

  @Metadata({ data: "json, name=vehicle_type" })
  vehicleType?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
