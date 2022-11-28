import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CasesGeneralStatsListResponse extends SpeakeasyBase {
    contentType: string;
    generalStats?: shared.GeneralStats[];
    statusCode: number;
}
