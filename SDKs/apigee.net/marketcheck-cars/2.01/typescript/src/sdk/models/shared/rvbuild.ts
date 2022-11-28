import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RvBuild
/** 
 * Describes the RV specification
**/
export class RvBuild extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: string;

  @SpeakeasyMetadata({ data: "json, name=class" })
  class?: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=fuel_type" })
  fuelType?: string;

  @SpeakeasyMetadata({ data: "json, name=gvwr" })
  gvwr?: string;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "json, name=made_in" })
  madeIn?: string;

  @SpeakeasyMetadata({ data: "json, name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=sleeps" })
  sleeps?: string;

  @SpeakeasyMetadata({ data: "json, name=slideouts" })
  slideouts?: string;

  @SpeakeasyMetadata({ data: "json, name=transmission" })
  transmission?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
