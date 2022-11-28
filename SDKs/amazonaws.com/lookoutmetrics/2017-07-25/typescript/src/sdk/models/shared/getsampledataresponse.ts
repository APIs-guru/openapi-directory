import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSampleDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HeaderValues" })
  headerValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=SampleRows" })
  sampleRows?: string[][];
}
