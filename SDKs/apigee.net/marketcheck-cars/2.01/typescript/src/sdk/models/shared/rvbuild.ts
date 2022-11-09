import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RvBuild
/** 
 * Describes the RV specification
**/
export class RvBuild extends SpeakeasyBase {
  @Metadata({ data: "json, name=area" })
  area?: string;

  @Metadata({ data: "json, name=class" })
  class?: string;

  @Metadata({ data: "json, name=engine" })
  engine?: string;

  @Metadata({ data: "json, name=fuel_type" })
  fuelType?: string;

  @Metadata({ data: "json, name=gvwr" })
  gvwr?: string;

  @Metadata({ data: "json, name=length" })
  length?: string;

  @Metadata({ data: "json, name=made_in" })
  madeIn?: string;

  @Metadata({ data: "json, name=make" })
  make?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=sleeps" })
  sleeps?: string;

  @Metadata({ data: "json, name=slideouts" })
  slideouts?: string;

  @Metadata({ data: "json, name=transmission" })
  transmission?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
