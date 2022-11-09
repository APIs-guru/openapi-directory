import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HeavyEquipmentsBuild
/** 
 * Describes the Heavy Equipments specification
**/
export class HeavyEquipmentsBuild extends SpeakeasyBase {
  @Metadata({ data: "json, name=body_type" })
  bodyType?: string;

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=drivetrain" })
  drivetrain?: string;

  @Metadata({ data: "json, name=engine" })
  engine?: string;

  @Metadata({ data: "json, name=fuel_type" })
  fuelType?: string;

  @Metadata({ data: "json, name=make" })
  make?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=sub_category" })
  subCategory?: string;

  @Metadata({ data: "json, name=transmission" })
  transmission?: string;

  @Metadata({ data: "json, name=trim" })
  trim?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
