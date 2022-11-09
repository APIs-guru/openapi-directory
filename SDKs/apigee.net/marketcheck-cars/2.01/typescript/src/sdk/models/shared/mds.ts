import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Mds
/** 
 * Describes Market days supply results for year make model trim combination
**/
export class Mds extends SpeakeasyBase {
  @Metadata({ data: "json, name=make" })
  make?: string;

  @Metadata({ data: "json, name=mds" })
  mds?: number;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=sold_vins" })
  soldVins?: string[];

  @Metadata({ data: "json, name=total_active_cars_for_ymmt" })
  totalActiveCarsForYmmt?: number;

  @Metadata({ data: "json, name=total_cars_sold_in_last_45_days" })
  totalCarsSoldInLast45Days?: number;

  @Metadata({ data: "json, name=trim" })
  trim?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
