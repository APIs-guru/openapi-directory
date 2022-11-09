import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ZoneStatistics } from "./zonestatistics";
export declare class ZoneStats extends SpeakeasyBase {
    nextPage?: string;
    statistics?: ZoneStatistics[];
    time: string;
    total?: number;
}
