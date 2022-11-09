import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigSflow extends SpeakeasyBase {
  @Metadata({ data: "json, name=collector" })
  collector?: string;

  @Metadata({ data: "json, name=collectorport" })
  collectorport?: number;

  @Metadata({ data: "json, name=encoding_type" })
  encodingType?: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=flows_per_min" })
  flowsPerMin?: number;

  @Metadata({ data: "json, name=include_samples" })
  includeSamples?: string;

  @Metadata({ data: "json, name=records_per_sample" })
  recordsPerSample?: string;

  @Metadata({ data: "json, name=samples_per_datagram" })
  samplesPerDatagram?: string;
}
