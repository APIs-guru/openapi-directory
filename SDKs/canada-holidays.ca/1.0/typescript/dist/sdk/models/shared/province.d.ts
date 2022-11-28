import { SpeakeasyBase } from "../../../internal/utils";
import { Holiday } from "./holiday";
export declare enum ProvinceIdEnum {
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
/**
 * A Canadian province or territory
**/
export declare class Province extends SpeakeasyBase {
    id?: ProvinceIdEnum;
    nameEn?: string;
    nameFr?: string;
    nextHoliday?: Holiday;
    provinces?: Holiday[];
}
