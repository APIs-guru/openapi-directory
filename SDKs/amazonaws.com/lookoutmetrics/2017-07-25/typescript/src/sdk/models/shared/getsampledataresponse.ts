import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSampleDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HeaderValues" })
  headerValues?: string[];

  @Metadata({ data: "json, name=SampleRows" })
  sampleRows?: string[][];
}
