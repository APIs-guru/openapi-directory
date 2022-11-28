import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HeavyEquipmentsBuild
/** 
 * Describes the Heavy Equipments specification
**/
export class HeavyEquipmentsBuild extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body_type" })
  bodyType?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=drivetrain" })
  drivetrain?: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=fuel_type" })
  fuelType?: string;

  @SpeakeasyMetadata({ data: "json, name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_category" })
  subCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=transmission" })
  transmission?: string;

  @SpeakeasyMetadata({ data: "json, name=trim" })
  trim?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
