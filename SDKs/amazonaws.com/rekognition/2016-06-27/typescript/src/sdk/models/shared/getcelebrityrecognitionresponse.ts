import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CelebrityRecognition } from "./celebrityrecognition";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { VideoMetadata } from "./videometadata";


export class GetCelebrityRecognitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Celebrities", elemType: shared.CelebrityRecognition })
  celebrities?: CelebrityRecognition[];

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
