import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { PersonMatch } from "./personmatch";
import { VideoMetadata } from "./videometadata";


export class GetFaceSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Persons", elemType: shared.PersonMatch })
  persons?: PersonMatch[];

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
