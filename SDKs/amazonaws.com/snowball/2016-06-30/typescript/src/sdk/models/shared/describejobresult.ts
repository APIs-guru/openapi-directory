import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobMetadata } from "./jobmetadata";
import { JobMetadata } from "./jobmetadata";


export class DescribeJobResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobMetadata" })
  jobMetadata?: JobMetadata;

  @Metadata({ data: "json, name=SubJobMetadata", elemType: shared.JobMetadata })
  subJobMetadata?: JobMetadata[];
}
