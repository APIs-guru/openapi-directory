import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Mds
/** 
 * Describes Market days supply results for year make model trim combination
**/
export class Mds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "json, name=mds" })
  mds?: number;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=sold_vins" })
  soldVins?: string[];

  @SpeakeasyMetadata({ data: "json, name=total_active_cars_for_ymmt" })
  totalActiveCarsForYmmt?: number;

  @SpeakeasyMetadata({ data: "json, name=total_cars_sold_in_last_45_days" })
  totalCarsSoldInLast45Days?: number;

  @SpeakeasyMetadata({ data: "json, name=trim" })
  trim?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
