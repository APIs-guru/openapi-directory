import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MotorcycleBuild
/** 
 * Describes the Motorcycle specification
**/
export class MotorcycleBuild extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body_type" })
  bodyType?: string;

  @SpeakeasyMetadata({ data: "json, name=cylinders" })
  cylinders?: number;

  @SpeakeasyMetadata({ data: "json, name=drivetrain" })
  drivetrain?: string;

  @SpeakeasyMetadata({ data: "json, name=dry_weight" })
  dryWeight?: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=fuel_type" })
  fuelType?: string;

  @SpeakeasyMetadata({ data: "json, name=made_in" })
  madeIn?: string;

  @SpeakeasyMetadata({ data: "json, name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=transmission" })
  transmission?: string;

  @SpeakeasyMetadata({ data: "json, name=trim" })
  trim?: string;

  @SpeakeasyMetadata({ data: "json, name=vehicle_type" })
  vehicleType?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
