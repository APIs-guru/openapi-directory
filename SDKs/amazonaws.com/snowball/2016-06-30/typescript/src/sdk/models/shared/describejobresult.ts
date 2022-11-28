import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobMetadata } from "./jobmetadata";



export class DescribeJobResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobMetadata" })
  jobMetadata?: JobMetadata;

  @SpeakeasyMetadata({ data: "json, name=SubJobMetadata", elemType: JobMetadata })
  subJobMetadata?: JobMetadata[];
}
