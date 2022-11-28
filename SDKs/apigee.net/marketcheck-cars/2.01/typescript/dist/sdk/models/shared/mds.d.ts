import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes Market days supply results for year make model trim combination
**/
export declare class Mds extends SpeakeasyBase {
    make?: string;
    mds?: number;
    model?: string;
    soldVins?: string[];
    totalActiveCarsForYmmt?: number;
    totalCarsSoldInLast45Days?: number;
    trim?: string;
    year?: number;
}
