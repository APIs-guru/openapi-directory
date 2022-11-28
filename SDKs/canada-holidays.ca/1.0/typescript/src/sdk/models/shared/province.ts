import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Holiday } from "./holiday";


export enum ProvinceIdEnum {
    Ab = "AB",
    Bc = "BC",
    Mb = "MB",
    Nb = "NB",
    Nl = "NL",
    Ns = "NS",
    Nt = "NT",
    Nu = "NU",
    On = "ON",
    Pe = "PE",
    Qc = "QC",
    Sk = "SK",
    Yt = "YT"
}


// Province
/** 
 * A Canadian province or territory 
**/
export class Province extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: ProvinceIdEnum;

  @SpeakeasyMetadata({ data: "json, name=nameEn" })
  nameEn?: string;

  @SpeakeasyMetadata({ data: "json, name=nameFr" })
  nameFr?: string;

  @SpeakeasyMetadata({ data: "json, name=nextHoliday" })
  nextHoliday?: Holiday;

  @SpeakeasyMetadata({ data: "json, name=provinces", elemType: Holiday })
  provinces?: Holiday[];
}
