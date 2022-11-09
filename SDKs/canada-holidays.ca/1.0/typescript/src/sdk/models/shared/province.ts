import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Holiday } from "./holiday";
import { Holiday } from "./holiday";

export enum ProvinceIdEnum {
    Ab = "AB"
,    Bc = "BC"
,    Mb = "MB"
,    Nb = "NB"
,    Nl = "NL"
,    Ns = "NS"
,    Nt = "NT"
,    Nu = "NU"
,    On = "ON"
,    Pe = "PE"
,    Qc = "QC"
,    Sk = "SK"
,    Yt = "YT"
}


// Province
/** 
 * A Canadian province or territory 
**/
export class Province extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: ProvinceIdEnum;

  @Metadata({ data: "json, name=nameEn" })
  nameEn?: string;

  @Metadata({ data: "json, name=nameFr" })
  nameFr?: string;

  @Metadata({ data: "json, name=nextHoliday" })
  nextHoliday?: Holiday;

  @Metadata({ data: "json, name=provinces", elemType: shared.Holiday })
  provinces?: Holiday[];
}
