import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigSflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collector" })
  collector?: string;

  @SpeakeasyMetadata({ data: "json, name=collectorport" })
  collectorport?: number;

  @SpeakeasyMetadata({ data: "json, name=encoding_type" })
  encodingType?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=flows_per_min" })
  flowsPerMin?: number;

  @SpeakeasyMetadata({ data: "json, name=include_samples" })
  includeSamples?: string;

  @SpeakeasyMetadata({ data: "json, name=records_per_sample" })
  recordsPerSample?: string;

  @SpeakeasyMetadata({ data: "json, name=samples_per_datagram" })
  samplesPerDatagram?: string;
}
