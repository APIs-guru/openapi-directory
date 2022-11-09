import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { PersonDetection } from "./persondetection";
import { VideoMetadata } from "./videometadata";


export class GetPersonTrackingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Persons", elemType: shared.PersonDetection })
  persons?: PersonDetection[];

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
