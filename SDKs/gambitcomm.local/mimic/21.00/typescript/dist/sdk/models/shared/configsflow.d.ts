import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ConfigSflow extends SpeakeasyBase {
    collector?: string;
    collectorport?: number;
    encodingType?: string;
    filename?: string;
    flowsPerMin?: number;
    includeSamples?: string;
    recordsPerSample?: string;
    samplesPerDatagram?: string;
}
